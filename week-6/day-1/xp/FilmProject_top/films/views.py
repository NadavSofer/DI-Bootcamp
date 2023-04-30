from django.shortcuts import render
from django.views import generic
from .models import Film, Director
from .forms import AddDirectorForm, AddFilmForm
from django.urls import reverse_lazy

# Create your views here.
class homepage(generic.ListView):
    template_name = 'homepage.html'
    model = Film
    form_class = AddFilmForm
    context_object_name = 'films'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['films'] = Film.objects.all()
        return context


class addFilm(generic.CreateView):
    template_name = 'film/addFilm.html'
    model = Film
    form_class = AddFilmForm
    success_url = reverse_lazy("homepage")

class FilmUpdateView(generic.UpdateView):
    template_name = 'film/update_Film.html'
    model = Film
    form_class = AddFilmForm
    success_url = reverse_lazy("homepage")

class addDirector(generic.CreateView):
    template_name = 'director/addDirector.html'
    model = Director
    form_class = AddDirectorForm
    success_url = reverse_lazy("homepage")

class DirectorUpdateView(generic.UpdateView):
    template_name = 'director/update_Director.html'
    model = Director
    form_class = AddDirectorForm
    success_url = reverse_lazy("homepage")