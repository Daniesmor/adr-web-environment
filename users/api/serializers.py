from rest_framework import serializers
from users.models import User



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'complete_name', 'university', 'studies', 'avatar', 'twitter_link', 'instagram_link', 'github_link', 'linkedin_link', 'email_contact', 'telf_contact', 'location_contact', 'about_me']

class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['university']