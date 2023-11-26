from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend


from rest_framework.decorators import action
from rest_framework.response import Response

from posts.models import Post
from posts.api.permissions import IsAdminOrReadOnly
from posts.api.serializers import PostSerializer


class PostApiViewSet(ModelViewSet):
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = PostSerializer
    queryset = Post.objects.filter(published=True)
    lookup_field = 'slug'
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category', 'category__slug', 'user__username']


