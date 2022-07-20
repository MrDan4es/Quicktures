from django.urls import path
from jwt_auth import views

from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='login'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('test/', views.get_username)
]
