from django.urls import path

from rest_framework_simplejwt.views import TokenRefreshView

from jwt_auth import views


urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='login'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('info/', views.get_user, name='user_info'),
]
