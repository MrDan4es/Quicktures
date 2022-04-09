from django.contrib import admin
from django.urls import path
from rest_framework.routers import SimpleRouter

from storage.views import ImageAPIList
from .views import index_page


router = SimpleRouter()

# router.register('api/images', ImageAPIView, basename='Image')

urlpatterns = [
    path('', index_page, name='index'),
    path('api/images/', ImageAPIList.as_view()),
    path('admin/', admin.site.urls),
]

urlpatterns += router.urls