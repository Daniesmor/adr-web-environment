from django.urls import path
from . import views

urlpatterns = [
    path('', views.HomeView.as_view(), name="home"),
    #path('<str:username>/', views.Personalized.as_view(), name='user-home'),
]