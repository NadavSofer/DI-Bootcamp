from django.shortcuts import render
from.models import Vehicle, Rental, Customer
from.forms import RentalForm
from django.http import HttpResponse
from django.views.generic import ListView , CreateView, DetailView

# Create your views here.
def display_rental(request):
    rental_all = Rental.objects.all()
    context = {'rental_list': rental_all}
    return render(request, "view_rentals.html", context)

def display_rental_by_id(request, id:int):
    instance = Rental.objects.get(id=id)
    context = {'rental': instance}
    return render(request, "view__by_id.html", context)


def add_rental(request):
    form = RentalForm()
    

    if request.method == 'POST':
        filled_form = RentalForm(request.POST)

        if filled_form.is_valid:
            filled_form.save()
            return HttpResponse('saved')
        
        else:
            return HttpResponse('filled_form')


    if request.method == 'GET':
        context = {'form': form}

        return render(request, "add_rental.html", context)
    

class  CustomerListView(ListView):
    model = Customer
    template_name = 'CustomerList.html'
    context_object_name = 'customers'

class CustomerDetailView(DetailView):
    model = Customer
    template_name = 'Customer.html'
    context_object_name = 'customer'

class CustomerCreateView(CreateView):
    model = Customer
    fields = '__all__'
    template_name = 'AddCustomer.html'
    success_url = '/rent/customer/'
    

class  VehicleListView(ListView):
    model = Vehicle
    template_name = 'VehicleList.html'
    context_object_name = 'vehicles'

class VehicleDetailView(DetailView):
    model = Vehicle
    template_name = 'Vehicle.html'
    context_object_name = 'vehicle'

class VehicleCreateView(CreateView):
    model = Vehicle
    fields = '__all__'
    template_name = 'AddVehicle.html'
    success_url = '/rent/vehicle/'