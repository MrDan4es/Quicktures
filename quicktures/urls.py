from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework.routers import SimpleRouter

from storage.views import AllImagesViewSet, UserImagesViewSet


router = SimpleRouter()
router.register('images', UserImagesViewSet, basename='images')
router.register('all', AllImagesViewSet, basename='all')

frontend = TemplateView.as_view(template_name='index.html')

urlpatterns = [
    path('api/user/', include('jwt_auth.urls')),
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),

    re_path('^.*', frontend)
]
