from django.contrib import admin
from django.urls import path,include,re_path
from django.conf.urls import url
from rest_auth.registration.views import VerifyEmailView
from django.views.generic import TemplateView


urlpatterns = [
    #admin url
    path('admin/', admin.site.urls),

    #django-allauth
    url(r'^accounts/', include('allauth.urls')),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),

    #Apps URLs
    url(r'^api/v1.0/product/', include('product.api.urls'), name='product_api'),

    url(r'^app/', TemplateView.as_view(template_name="frontend/index.html")),

]
