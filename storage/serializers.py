from rest_framework.serializers import ModelSerializer, CharField

from storage.models import Image


class ImageSerializer(ModelSerializer):
    username = CharField(source="user.username", read_only=True)
    
    class Meta:
        model = Image
        fields = ['title', 'url', 'id', 'date_create', 'username']
        read_only_fields = ['date_create']
    
    def create(self, validated_data):
        return Image.objects.create(**validated_data)
