from django.shortcuts import render
from facesapp.models import get_image_set


def new_images(request):
    set_num = request.GET.get('imgset', '')
    images = get_image_set(int(set_num))
    context = {'image_list': images}
    return render(request, 'facesapp/image_grid.html', context)


def index(request):
    imgset_init = 0
    images = get_image_set(imgset_init)
    context = {'image_list': images,
               'imgset_init': imgset_init}
    return render(request, 'facesapp/index.html', context)
