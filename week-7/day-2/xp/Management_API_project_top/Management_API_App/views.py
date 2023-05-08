from django.shortcuts import render
from rest_framework import mixins
from rest_framework.generics import GenericAPIView , ListAPIView , DestroyAPIView , CreateAPIView , RetrieveAPIView
from .models import Employee , Department , Task , Project
from .serializers import EmployeeSerializer , ProjectSerializer , TaskSerializer , DepartmentSerializer
from rest_framework import mixins
# Create your views here.
class EmployeeListAPIView(ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    
    def get_queryset(self):
        queryset = Employee.objects.all()
        query_name = self.request.query_params.get('name', None)
        if query_name is not None:
            queryset = queryset.filter(name = query_name)
        else:
            queryset = Employee.objects.all()
        return queryset



class EmployeeCreateAPIView(mixins.ListModelMixin, CreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    def get(self, request , *args , **kwargs):
        return self.list(request, *args , **kwargs)


class EmployeeRetrieveAPIView(mixins.UpdateModelMixin, mixins.DestroyModelMixin, mixins.ListModelMixin, RetrieveAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    def put(self, request , *args , **kwargs):
        return self.update(request, *args , **kwargs)
    def delete(self, request , *args , **kwargs):
        return self.destroy(request, *args , **kwargs)


class DepartmentListAPIView(ListAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    
    def get_queryset(self):
        queryset = Department.objects.all()
        query_name = self.request.query_params.get('name', None)
        if query_name is not None:
            queryset = queryset.filter(name = query_name)
        else:
            queryset = Department.objects.all()
        return queryset


class DepartmentCreateAPIView(mixins.ListModelMixin, CreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    def get(self, request , *args , **kwargs):
        return self.list(request, *args , **kwargs)


class DepartmentRetrieveAPIView(mixins.UpdateModelMixin, mixins.DestroyModelMixin, mixins.ListModelMixin, RetrieveAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    def put(self, request , *args , **kwargs):
        return self.update(request, *args , **kwargs)
    def delete(self, request , *args , **kwargs):
        return self.destroy(request, *args , **kwargs)


class ProjectListAPIView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    
    def get_queryset(self):
        queryset = Project.objects.all()
        query_name = self.request.query_params.get('name', None)
        if query_name is not None:
            queryset = queryset.filter(name = query_name)
        else:
            queryset = Project.objects.all()
        return queryset



class ProjectCreateAPIView(mixins.ListModelMixin, CreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    def get(self, request , *args , **kwargs):
        return self.list(request, *args , **kwargs)
    
    
class ProjectRetrieveAPIView(mixins.UpdateModelMixin, mixins.DestroyModelMixin, mixins.ListModelMixin, RetrieveAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    def put(self, request , *args , **kwargs):
        return self.update(request, *args , **kwargs)
    def delete(self, request , *args , **kwargs):
        return self.destroy(request, *args , **kwargs)


class TaskListAPIView(ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get_queryset(self):
        queryset = Task.objects.all()
        query_name = self.request.query_params.get('name', None)
        if query_name is not None:
            queryset = queryset.filter(name = query_name)
        else:
            queryset = Task.objects.all()
        return queryset


class TaskCreateAPIView(mixins.ListModelMixin, CreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    def get(self, request , *args , **kwargs):
        return self.list(request, *args , **kwargs)


class TaskRetrieveAPIView(mixins.UpdateModelMixin, mixins.DestroyModelMixin, mixins.ListModelMixin, RetrieveAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    def put(self, request , *args , **kwargs):
        return self.update(request, *args , **kwargs)
    def delete(self, request , *args , **kwargs):
        return self.destroy(request, *args , **kwargs)