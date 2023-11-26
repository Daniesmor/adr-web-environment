from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from .views import AdrTestView
from django.urls import path


urlpatterns = [
    path('', AdrTestView.as_view(), name='adttest_view'),
]

urlpatterns += staticfiles_urlpatterns()
