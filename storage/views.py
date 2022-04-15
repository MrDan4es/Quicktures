from rest_framework.response import Response
from rest_framework import viewsets

from storage.models import Image
from storage.serializers import ImageSerializer


class ImageViewSet(viewsets.ModelViewSet):
    serializer_class = ImageSerializer
    
    def get_queryset(self):
        return Image.objects.filter(user=self.request.user)
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
            
        serializer.is_valid(raise_exception=True)
        serializer.save(user=self.request.user)
        
        return Response({'image': serializer.data})
