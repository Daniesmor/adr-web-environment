from django.db import models
from users.models import User
from django.db.models import SET_NULL

# Create your models here.
class TestData(models.Model):
    name = models.CharField(max_length=255, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=SET_NULL, null=True)

    first_weight = models.DecimalField(max_digits=5, decimal_places=2)
    second_weight = models.DecimalField(max_digits=5, decimal_places=2)
    third_weight = models.DecimalField(max_digits=5, decimal_places=2)
    fourth_weight = models.DecimalField(max_digits=5, decimal_places=2)
    fifth_weight = models.DecimalField(max_digits=5, decimal_places=2)

    first_vel = models.DecimalField(max_digits=5, decimal_places=2)
    second_vel = models.DecimalField(max_digits=5, decimal_places=2)
    third_vel = models.DecimalField(max_digits=5, decimal_places=2)
    fourth_vel = models.DecimalField(max_digits=5, decimal_places=2)
    fifth_vel = models.DecimalField(max_digits=5, decimal_places=2)
