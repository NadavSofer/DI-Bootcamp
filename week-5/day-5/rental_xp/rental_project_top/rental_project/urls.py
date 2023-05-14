"""
URL configuration for rental_project project.

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
from rental_app.views import (display_rental, display_rental_by_id, add_rental, 
                            CustomerListView, CustomerDetailView, CustomerCreateView, 
                            VehicleListView, VehicleDetailView, VehicleCreateView
                            )
urlpatterns = [
    path('admin/', admin.site.urls),
    path('rent/rental/',display_rental),
    path('rent/rental/<int:id>', display_rental_by_id),
    path('add_rental/', add_rental),
    path('rent/customer/', CustomerListView.as_view(), name='CustomerList'),
    path('rent/customer/<pk>/', CustomerDetailView.as_view(), name='customer'),
    path('rent/customers/add/', CustomerCreateView.as_view()),
    path('rent/vehicle/', VehicleListView.as_view(), name='vehicleList'),
    path('rent/vehicle/<pk>/', VehicleDetailView.as_view(), name='vehicle'),
    path('rent/vehicles/add/', VehicleCreateView.as_view())

]
