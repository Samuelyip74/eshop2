from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework import pagination
from product.models import Product,Category
from .serializers import ProductSerializer, CategorySerializer

class CategoryAPIList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer 

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()

        #serializer = self.get_serializer(queryset, many=True)
        serializer = CategorySerializer(queryset, many=True)
        return Response(serializer.data)

    def get_queryset(self):
        query = Category.objects.all()
        return query


class StandardResultsSetPagination(pagination.PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 1000

class ProductAPIList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer 
    pagination_class = StandardResultsSetPagination

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        #serializer = self.get_serializer(queryset, many=True)
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)

    def get_queryset(self):
        query = Product.objects.all()
        category = self.request.query_params.get('category', None)
        if category is not None:
            queryset = query.filter(category__name__iexact=category,is_active=True)
            return queryset
        else:
            return query

class ProductAPIDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer            