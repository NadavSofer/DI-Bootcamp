"""
URL configuration for gif_site project.

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
from django.urls import path
from gif_app.views import Homepage, add_gif, add_category, view_all, view_by_category, view_by_gif

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', Homepage, name = 'homepage'),
    path('add_gif/', add_gif, name = 'add_gif'),
    path('add_category/', add_category, name ='add_category'),
    path('view_all/', view_all, name ='view_all'),
    path('view_category/<int:id>/', view_by_category, name ='view_category'),
    path('view_gif/<int:id>/', view_by_gif, name ='view_gif'),
]
