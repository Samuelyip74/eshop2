from rest_framework import serializers
from product.models import Product, Category

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = (
            "id",
            "name", 
            "description",
            "sku",
            "created_date",
            "is_active",
            "slug",
            "price",
            "images"
            )

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = (
            "id",
            "name", 
            "description",
            )
