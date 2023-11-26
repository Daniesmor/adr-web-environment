from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    # Otras rutas de la app "users"...
]

urlpatterns += staticfiles_urlpatterns()
