# Generated by Django 4.0.3 on 2022-04-08 10:21

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('storage', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='date_create',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
