# Generated by Django 4.0.3 on 2022-04-15 16:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('storage', '0002_alter_image_date_create'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='title',
            field=models.CharField(max_length=20, verbose_name='Название'),
        ),
    ]
