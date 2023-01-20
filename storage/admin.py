from django.contrib import admin
from storage.models import *


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ('title', 'date_create', 'url', 'user')
