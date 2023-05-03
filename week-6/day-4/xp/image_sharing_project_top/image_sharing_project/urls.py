from django.contrib import admin
from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView
from image_share.views import signup_view, upload_image, view_all, ViewByUser

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', LoginView.as_view(template_name = 'registration/login.html'), name= 'login'),
    path('logout/', LogoutView.as_view(), name= 'logout'),
    path('signup/', signup_view.as_view(), name='signup'),
    path('upload_image/', upload_image.as_view(), name='upload-image'),
    path('view_all/', view_all.as_view(), name='view-all'),
    path('ViewByUser/', ViewByUser.as_view(), name='By-User')
    
]