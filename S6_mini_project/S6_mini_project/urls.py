from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('SafeRoute_Odyssey.urls')),  # Include your app's URLs here
]
