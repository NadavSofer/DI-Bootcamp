from django.shortcuts import render
from django.views import generic
from .models import Film, Director
from .forms import AddDirectorForm, AddFilmForm
from django.urls import reverse_lazy
from .validators import SuperUserRequiredMixin

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

class addDirector(generic.CreateView):
    template_name = 'director/addDirector.html'
    model = Director
    form_class = AddDirectorForm
    success_url = reverse_lazy("homepage")

class FilmUpdateView(SuperUserRequiredMixin, generic.UpdateView):
    template_name = 'film/update_Film.html'
    model = Film
    form_class = AddFilmForm
    success_url = reverse_lazy("homepage")

class DirectorUpdateView(SuperUserRequiredMixin, generic.UpdateView):
    template_name = 'director/update_Director.html'
    model = Director
    form_class = AddDirectorForm
    success_url = reverse_lazy("homepage")

class DirectorDeleteView(SuperUserRequiredMixin, generic.DeleteView):
    template_name = 'director/delete_Director.html'
    model = Director
    success_url = reverse_lazy("homepage")

class FilmDeleteView(SuperUserRequiredMixin, generic.DeleteView):
    template_name = 'film/delete_film.html'
    model = Film
    success_url = reverse_lazy("homepage")