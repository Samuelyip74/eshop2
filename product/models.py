import datetime
import random
import os
import math

from django.contrib.sites.models import Site
from django.conf import settings
from django.urls import reverse

from django.utils.text import slugify
from django.db.models.signals import pre_save
from django.db import models

User = settings.AUTH_USER_MODEL

def upload_image_path(instance, filename):
    # print(instance)
    #print(filename)
    new_filename = random.randint(1,3910209312)
    name, ext = get_filename_ext(filename)
    final_filename = '{new_filename}{ext}'.format(new_filename=new_filename, ext=ext)
    return "product/{new_filename}/{final_filename}".format(
            new_filename=new_filename, 
            final_filename=final_filename
            )

def get_filename_ext(filepath):
    base_name = os.path.basename(filepath)
    name, ext = os.path.splitext(base_name)
    return name, ext

class Image(models.Model):
    image   = models.ImageField(upload_to=upload_image_path, null=True, blank=True)

    def __str__(self):
        return f"Images of {self.id}"

class Category(models.Model):
    name = models.CharField('Name',max_length=200)
    description = models.CharField('Description',max_length=200)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField('Name',max_length=200)
    description = models.CharField('Description',max_length=200)
    slug = models.SlugField(blank=True, unique=True)
    created_date = models.DateTimeField('Date created',auto_now_add=True, blank=True)
    category = models.ManyToManyField(Category)
    is_active = models.BooleanField(default=True,blank=True)
    sku = models.CharField('SKU',max_length=200)
    price = models.FloatField('Price',default=0.00)
    images = models.ManyToManyField(Image)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        #return "/products/{slug}/".format(slug=self.slug)
        #return reverse("product:detail", kwargs={"pk": self.id})
        pass