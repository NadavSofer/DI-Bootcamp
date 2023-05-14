from django.contrib import admin
from .models import Director, Film, Category, Country, Reviews
# Register your models here.
admin.site.register(Director)
admin.site.register(Film)
admin.site.register(Category)
admin.site.register(Country)
admin.site.register(Reviews)