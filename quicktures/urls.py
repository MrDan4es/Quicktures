from django.contrib import admin
from django.urls import path, include

from rest_framework.routers import SimpleRouter

from storage.views import ImageViewSet
from .views import index_page, logout_view


router = SimpleRouter()
router.register(r'images', ImageViewSet, basename='images')

urlpatterns = [
    path('', index_page, name='index'),
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('logout/', logout_view, name='logout')
]
