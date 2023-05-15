from django.contrib.auth.views import LogoutView, LoginView
from django.urls import path, include
from .views import signup_view


urlpatterns = [
    path('login/', LoginView.as_view(template_name = 'login.html'), name= 'login'),
    path('logout/', LogoutView.as_view(template_name = 'logout.html'), name= 'logout'),
    path('signup/', signup_view.as_view(), name='signup'),
]