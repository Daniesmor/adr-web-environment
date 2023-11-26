"""
URL configuration for portfolio project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from categories.api.router import router_categories
from posts.api.router import router_posts
from adrtest.api.router import router_adrtest

from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
   openapi.Info(
      title="Portfolio API",
      default_version='v1',
      description="Documentacion de la API del Portfolio",
      terms_of_service="",
      contact=openapi.Contact(email="daniesmor@gmail.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   #permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redocs/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('api/', include('users.api.router')),
    path('users/', include('users.urls')),
    path('', include('core.urls')),
    path('api/', include('certifications.api.router')),
    path('certifications/', include('certifications.urls')),
    path('api/', include('education.api.router')),
    path('eduaction/', include('education.urls')),
    path('api/', include(router_categories.urls)),
    path('api/', include(router_posts.urls)),
    path('posts/', include('posts.urls')),
    path('api/', include(router_adrtest.urls)),
    path('panel/', include('adrtest.urls'))
]
