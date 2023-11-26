from django.db import models
from users.models import User
from django.db.models import SET_NULL


class Degree(models.Model):
    user = models.ForeignKey(User, on_delete=SET_NULL, null=True)
    degree = models.CharField(max_length=100, blank=True)
    university = models.CharField(max_length=100, blank=True)
    start_year = models.CharField(max_length=100, blank=True)
    end_year = models.CharField(max_length=100, blank=True)
    photo = models.ImageField(upload_to='certifications/static/img/', blank=True)

    def __str__(self):
        return self.degree