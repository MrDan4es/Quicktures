from django.shortcuts import render

from storage.models import Image


def index_page(request):
    images = Image.objects.filter(user=request.user).order_by('-id')
    return render(request, 'index.html', {'images': images})