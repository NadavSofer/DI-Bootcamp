from django.shortcuts import render
from.forms import todo_form
from django.http import HttpResponse
from.models import Todo
# Create your views here.
def add_todo(request):
    form = todo_form()

    if request.method == 'POST':
        filled_form = todo_form(request.POST)

        if filled_form.is_valid:
            filled_form.save()
            return HttpResponse('saved')
        else:
            return HttpResponse('filled_form')

    if request.method == 'GET':
        context = {'form': form}
        return render(request, "add_todo.html", context)



def display_todos(request):
    todo_all = Todo.objects.all()
    context = {'todo_list': todo_all}
    return render(request, "view_todos.html", context)