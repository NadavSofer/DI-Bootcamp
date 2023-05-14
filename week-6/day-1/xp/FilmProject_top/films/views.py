from typing import Any, Dict
from django.urls import reverse
from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.views import generic
from .models import Film, Director, Reviews
from .forms import AddDirectorForm, AddFilmForm, ReviewForm
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

class DirectorDetailView(generic.DetailView):
    model = Director
    template_name = 'director/directorView.html'
    context_object_name = 'director'

class FilmDetailView(generic.DetailView):
    model = Film
    template_name = 'film/filmView.html'
    context_object_name = 'film'

    def get_context_data(self, **kwargs: Any) -> Dict[str, Any]:
        context = {}
        id = self.kwargs.get('pk')
        reviews_list = Reviews.objects.filter(film_id=id)
        form = ReviewForm()

        if self.request.method == 'POST':
            form = ReviewForm(self.request.POST)
            if form.is_valid():
                review = form.save(commit=False)
                review.film_id = id
                review.user = self.request.user
                review.save()
                return HttpResponseRedirect(reverse('film-detail', args=[id]))

        context.update({
            'id': id,
            'form': form,
            'review_list': reviews_list,
        })
        return context
    
    def post(self, request, *args, **kwargs):
        return self.get_context_data(**kwargs)