from .settings_base import *


SECRET_KEY = 'django-insecure-2fv%g-sul$fu-gbekmsw^&$8z8z#_g8-w^2tbqb8)#z6%pi%2%'

DEBUG = True # ?

ALLOWED_HOSTS = ['*']

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    'livereload',
    'rest_framework',
    
    'storage',
]

MIDDLEWARE = [
    'whitenoise.middleware.WhiteNoiseMiddleware',    

    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

try:
    from .prod_db_settings import DATABASES
except ImportError:
    from .settings_dev import DATABASES

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
    ]
}

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
