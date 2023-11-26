from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from users.models import User


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal Data', {'fields': ('complete_name', 'avatar', 'about_me')}),
        ('Studies', {'fields': ('university', 'studies')}),
        ('Social Network', {'fields': ('twitter_link', 'instagram_link', 'github_link', 'linkedin_link')}),
        ('Contact Data', {'fields': ('email_contact', 'telf_contact', 'location_contact')})
    )
