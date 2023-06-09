"""
URL configuration for FilmProject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from films.views import addFilm, addDirector, homepage, FilmUpdateView, DirectorUpdateView, FilmDeleteView, DirectorDeleteView, FilmDetailView, DirectorDetailView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('homepage/', homepage.as_view(), name='homepage' ),
    path('addFilm/', addFilm.as_view(), name='addFilm'),
    path('addDirector/', addDirector.as_view(), name='addDirector'),
    path('updateFilm/<int:pk>', FilmUpdateView.as_view(), name='updateFilm'),
    path('updateDirector/<int:pk>', DirectorUpdateView.as_view(), name='updateDirector'),
    path('accounts/', include('accounts.urls')),
    path('delete_film/<int:pk>', FilmDeleteView.as_view(), name= 'delete_film'),
    path('delete_director/<int:pk>', DirectorDeleteView.as_view(), name= 'delete_director'),
    path('film/<int:pk>', FilmDetailView.as_view(), name= 'film-detail'),
    path('director/<int:pk>', DirectorDetailView.as_view(), name= 'director'),
]
