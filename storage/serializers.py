from rest_framework.serializers import ModelSerializer

from storage.models import Image


class ImageSerializer(ModelSerializer):
    class Meta:
        model = Image
        fields = ['title', 'url']
    
    def create(self, validated_data):
        return Image.objects.create(**validated_data)