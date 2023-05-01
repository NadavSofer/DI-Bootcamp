from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.generic import DetailView, CreateView
from django.contrib.auth.forms import UserCreationForm
from .models import UserProfile
from .forms import ProfileForm

# Create your views here.



class profile_view(DetailView):
    model = UserProfile
    template_name= 'profile.html'
    context_object_name = 'profile'

class signup_view(CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'sign_up.html'

def profile_view(request):
    user = request.user
    if hasattr(user, 'profile'):
        return redirect('posts-all')
    else:
        return redirect('create-profile')


def create_profile_view(request): # ----------------------> doesn't work
    if request.method == 'post':
        form = ProfileForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('posts-all')
        user = request.user
        form = ProfileForm(initial = {'user': user})
        context = {'form': form}
        return render(request, 'create_profile.html', context)
