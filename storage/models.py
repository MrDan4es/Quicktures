from django.contrib.auth.models import User
from django.utils import timezone
from django.db.models import (
    CASCADE,
    CharField,
    DateTimeField,
    ForeignKey,
    Model,
    URLField,
)


class Image(Model):
    title = CharField('Название', max_length=20)
    date_create = DateTimeField(default=timezone.now)
    url = URLField('Адрес')
    user = ForeignKey(User, on_delete=CASCADE)
