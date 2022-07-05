from django.contrib import admin
from django.urls import path, include

from rest_framework.routers import SimpleRouter

from storage.views import AllImagesViewSet, UserImagesViewSet
from .views import index_page, all_page, logout_view


router = SimpleRouter()
router.register('images', UserImagesViewSet, basename='images')
router.register('all', AllImagesViewSet, basename='all')

urlpatterns = [
    path('', index_page, name='index'),
    path('all/', all_page, name='all'),
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('logout/', logout_view, name='logout')
]
