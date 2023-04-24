from django.shortcuts import render
from.forms import GifForm, CategoryForm
from.models import Gif_model, Category_Model
from django.http import HttpResponse

# Create your views here.
def Homepage(request):
    gif_form = GifForm()
    cat_form = CategoryForm()
    gifs = Gif_model.objects.all()
    context = {'gifs':gifs, 'gif_form': gif_form, 'cat_form': cat_form}
    return render(request, 'home_page.html', context)



def add_gif(request):
    if request.method == "POST":
        form = GifForm(request.POST)
        if form.is_valid():
            title = form.cleaned_data['title']
            uploader_name = form.cleaned_data['uploader_name']
            url = form.cleaned_data['url']
            categories = form.cleaned_data['categories']

            new_gif = Gif_model(title=title, uploader_name=uploader_name, url=url)
            new_gif.save()
            for category in categories:
                new_gif.categories.add(category)
            new_gif.save()
            return render(request, "add_gif.html", {"form": GifForm})
    else:
        form = GifForm()
    return render(request, "add_gif.html", {"form": GifForm})


def add_category(request):
    if request.method == "POST":
        form = CategoryForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']

            new_gif = Category_Model(name=name)
            new_gif.save()
            return render(request, "add_category.html", {"form": CategoryForm})
    else:
        form = GifForm()
    return render(request, "add_category.html", {"form": CategoryForm})