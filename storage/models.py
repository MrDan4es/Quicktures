from email.policy import default
from time import timezone
from django.db.models import Model
from django.contrib.auth.models import User
from django.utils import timezone
from django.db.models import (
    CharField, ForeignKey, URLField, DateTimeField, CASCADE
)


class Image(Model):
    title = CharField('Название', max_length=20)
    date_create = DateTimeField(default=timezone.now)
    url = URLField('Адрес')
    user = ForeignKey(User, on_delete=CASCADE)