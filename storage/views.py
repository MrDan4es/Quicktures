from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from rest_framework.response import Response

from storage.models import Image
from storage.serializers import ImageSerializer


class UserImagesViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = ImageSerializer
    
    def get_queryset(self):
        return Image.objects.filter(user=self.request.user).order_by('-date_create')
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
            
        serializer.is_valid(raise_exception=True)
        serializer.save(user=self.request.user)
        
        return Response(serializer.data)


class AllImagesViewSet(ReadOnlyModelViewSet):
    serializer_class = ImageSerializer
    queryset = Image.objects.all().order_by('-date_create')
