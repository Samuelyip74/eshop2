from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin
from django.conf.urls import url
from django.urls import path,include
from .views import ProductAPIDetailView,ProductAPIList,CategoryAPIList

app_name = 'api'

urlpatterns = [
    url(r'category/$', CategoryAPIList.as_view()),
    url(r'^(?P<pk>[\w-]+)/$', ProductAPIDetailView.as_view()),
    url(r'^$', ProductAPIList.as_view()),
]
