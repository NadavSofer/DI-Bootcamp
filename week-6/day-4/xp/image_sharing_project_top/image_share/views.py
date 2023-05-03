from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import DetailView, CreateView, UpdateView, ListView
from django.contrib.auth.forms import UserCreationForm
from .forms import UploadImageForm
from .models import Image
from django.contrib.auth.mixins import LoginRequiredMixin

# Create your views here.
class signup_view(CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'registration/register.html'

class upload_image(CreateView):
    form_class = UploadImageForm
    success_url = reverse_lazy('upload-image')
    template_name = 'image-share/upload_image.html'
    def get_initial(self):
            return { 'user' : self.request.user}


class view_all(ListView):
    template_name = 'image-share/view_albums.html'
    context_object_name = 'images'
    model = Image

class ViewByUser(LoginRequiredMixin, ListView):
    template_name = 'image-share/my_images.html'
    context_object_name = 'images'
    model = Image

    def get_queryset(self):
        user = self.request.user
        queryset = super().get_queryset().filter(user=user)
        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        user = self.request.user
        num_images_uploaded = Image.objects.filter(user=user).count()
        context['num_images_uploaded'] = num_images_uploaded
        return context
        return queryset