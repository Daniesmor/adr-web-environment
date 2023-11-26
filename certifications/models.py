from django.db import models
from users.models import User
from django.db.models import SET_NULL


class Certificate(models.Model):
    user = models.ForeignKey(User, on_delete=SET_NULL, null=True)
    name = models.CharField(max_length=100, blank=True)
    company = models.CharField(max_length=100, blank=True)
    expedition = models.CharField(max_length=100, blank=True)
    certfication_id = models.CharField(max_length=100, blank=True)
    certificate_link = models.CharField(max_length=100, blank=True)
    photo = models.ImageField(upload_to='certifications/static/img/', blank=True)

    def __str__(self):
        return self.name