from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from .views import PostView, PostListView
from django.urls import path


urlpatterns = [
    path('<slug:slug>/', PostView.as_view(), name='post_detail'),
    path('user/<str:user>/', PostListView.as_view(), name='post_list'),
]

urlpatterns += staticfiles_urlpatterns()
