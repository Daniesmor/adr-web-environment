from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=255, blank=True)
    complete_name = models.CharField(max_length=255, blank=True)
    avatar = models.ImageField(upload_to='users/static/img/', blank=True)
    university = models.CharField(max_length=255, blank=True)
    studies = models.CharField(max_length=255, blank=True)
    email_contact = models.EmailField(blank=True)
    telf_contact = models.CharField(max_length=255, blank=True)
    location_contact = models.CharField(max_length=255, blank=True)
    twitter_link = models.CharField(max_length=255, blank=True)
    instagram_link = models.CharField(max_length=255, blank=True)
    github_link = models.CharField(max_length=255, blank=True)
    linkedin_link = models.CharField(max_length=255, blank=True)
    about_me = models.TextField(blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []