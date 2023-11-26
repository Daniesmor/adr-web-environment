from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import AllowAny  # Importa el permiso AllowAny


from adrtest.models import TestData
from adrtest.api.serializers import AdrTestSerializer


class AdrTestViewSet(ModelViewSet):
    serializer_class = AdrTestSerializer
    queryset = TestData.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user__username']
    permission_classes = [AllowAny] 
