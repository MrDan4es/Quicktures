from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone


class Image(models.Model):
    title = models.CharField('Название', max_length=20)
    date_create = models.DateTimeField(default=timezone.now)
    url = models.URLField('Адрес')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
