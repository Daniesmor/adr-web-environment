from django.urls import path
from education.api.views import DegreeView


urlpatterns = [
    path('education/<str:username>/', DegreeView.as_view(), name='user-education'),
]