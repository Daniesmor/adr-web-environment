from rest_framework import serializers
from users.api.serializers import UserSerializer
from categories.api.serializers import CategorySerializer
from posts.models import Post

class PostSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    category = CategorySerializer()

    class Meta:
        model = Post
        fields = ['title', 'content', 'slug', 'miniature', 'created_at', 'published', 'user', 'category']