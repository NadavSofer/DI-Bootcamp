from django.shortcuts import render
from.models import Vehicle, VehicleSize, VehicleType, Rental, RentalRate, Customer
from.forms import RentalForm
from django.http import HttpResponse

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