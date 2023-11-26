from django.urls import path
from certifications.api.views import CertificateView


urlpatterns = [
    path('certificates/<str:username>/', CertificateView.as_view(), name='user-certificates'),
]