from django.contrib import admin
from adrtest.models import TestData

# Register your models here.
@admin.register(TestData)
class AdrTestAdmin(admin.ModelAdmin):
    list_display = ['date', 'user']