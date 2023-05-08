"""
URL configuration for Management_API_project project.

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
from Management_API_App.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    
    path('api/employee/', EmployeeListAPIView.as_view(), name='employee-all'),
    path('api/employee/create/', EmployeeCreateAPIView.as_view(), name='employee-create'),
    path('api/employee/Retrieve/<int:pk>', EmployeeRetrieveAPIView.as_view(), name='employee'),

    path('api/department/', DepartmentListAPIView.as_view(), name='department-all'),
    path('api/department/create/', DepartmentCreateAPIView.as_view(), name='department-create'),
    path('api/department/Retrieve/<int:pk>', DepartmentRetrieveAPIView.as_view(), name='department'),

    path('api/project/', ProjectListAPIView.as_view(), name='project-all'),
    path('api/project/create/', ProjectCreateAPIView.as_view(), name='project-create'),
    path('api/project/Retrieve/<int:pk>', ProjectRetrieveAPIView.as_view(), name='project'),

    path('api/task/', TaskListAPIView.as_view(), name='task-all'),
    path('api/task/create/', TaskCreateAPIView.as_view(), name='task-create'),
    path('api/task/Retrieve/<int:pk>', TaskRetrieveAPIView.as_view(), name='task')

]
