from django.contrib import admin
from certifications.models import Certificate


@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    pass
    
