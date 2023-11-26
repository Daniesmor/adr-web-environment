from rest_framework.routers import DefaultRouter
from adrtest.api.views import AdrTestViewSet


router_adrtest = DefaultRouter()

router_adrtest.register(prefix='adrtest', basename='adrtest',viewset=AdrTestViewSet)