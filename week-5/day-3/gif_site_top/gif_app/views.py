from django.shortcuts import render
from.forms import GifForm, CategoryForm, Likes
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
    form = CategoryForm()
    

    if request.method == 'POST':
        print(request.POST)
        print('getting data in')
        gif_filled_form = CategoryForm(request.POST)

        if gif_filled_form.is_valid:
            gif_filled_form.save()
            return HttpResponse('saved')
        
        else:
            return HttpResponse('gif_filled_form')


    if request.method == 'GET':
        print(request.GET)
        print('getting data out')
        context = {'form': form}

        return render(request, "add_category.html", context)


def view_all(request):
    gifs_list = Gif_model.objects.all()
    forms = [Likes(initial={'gif': gif_inct}) for gif_inct in gifs_list]
    gifs_forms = list(zip(gifs_list, forms))
    context = {'gifs_forms': gifs_forms}
    return render(request, "view_all.html", context)



def view_by_gif(request, id:int):
    instance = Gif_model.objects.get(id=id)
    context = {'gif': instance}
    return render(request, "view_gif.html", context)



def view_by_category(request, id:int):
    category = Category_Model.objects.get(id=id)
    gifs_list = category.gifs.all()
    context = {'gifs_list': gifs_list, 'category': category}
    return render(request, "view_category.html", context)


# ---------------------------------------------------
# def add_gif(request):
#     form = GifForm()
    

#     if request.method == 'POST':
#         print(request.POST)
#         print('getting data in')
#         gif_filled_form = GifForm(request.POST)

#         if gif_filled_form.is_valid:
#             gif_filled_form.save()
            

#             return HttpResponse('saved')


    # if request.method == 'GET':
    #     print(request.GET)
    #     print('getting data out')
    #     context = {'form': form}

    #     return render(request, "add_gif.html", context)


# def add_category(request):
#     try:
#         if request.method == "POST":
#             form = CategoryForm(request.POST)
#             if form.is_valid():
#                 name = form.cleaned_data['name']

#                 new_gif = Category_Model(name=name)
#                 new_gif.save()
#                 return render(request, "add_category.html", {"form": CategoryForm})
#         else:
#             form = GifForm()
#         return render(request, "add_category.html", {"form": CategoryForm})
#     except:
#         pass
# -------------------------------------------------> yossi thing