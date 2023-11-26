from django.contrib import admin
from education.models import Degree


@admin.register(Degree)
class DegreeAdmin(admin.ModelAdmin):
    pass
    
