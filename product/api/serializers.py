from rest_framework import serializers
from product.models import Product

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
