from django.forms import model_to_dict
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics

from storage.models import Image
from storage.serializers import ImageSerializer


class ImageAPIList(generics.ListCreateAPIView):
    serializer_class = ImageSerializer
    
    def get_queryset(self):
        return Image.objects.filter(user=self.request.user)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid():
            print(request.data)
            print(serializer.errors)
            
        serializer.is_valid(raise_exception=True)
        serializer.save(user=self.request.user)
        
        return Response({'image': serializer.data})
    
class ImageAPIView(APIView):
    def get(self, request):
        images = Image.objects.filter(user=request.user)
        
        return Response({'images': ImageSerializer(list(images), many=True).data})

    def post(self, request):
        serializer = ImageSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=self.request.user)
        
        return Response({'image': serializer.data})
# class ImageView(ModelViewSet):
#     queryset = Image.objects.all()
#     serializer_class = ImageSerializer