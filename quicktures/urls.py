from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required

from rest_framework.routers import SimpleRouter

from storage.views import AllImagesViewSet, UserImagesViewSet
from .views import login_page, all_page, logout_page


router = SimpleRouter()
router.register('images', UserImagesViewSet, basename='images')
router.register('all', AllImagesViewSet, basename='all')

urlpatterns = [
    path('login/', login_page),
    path('all/', all_page, name='all'),
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('logout/', logout_page, name='logout'),
    path('', login_required(TemplateView.as_view(template_name='index.html'))),
]
