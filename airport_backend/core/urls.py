from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FlightViewSet, PassengerViewSet, BookingViewSet, dashboard_stats

router = DefaultRouter()
router.register('flights', FlightViewSet)
router.register('passengers', PassengerViewSet)
router.register('bookings', BookingViewSet)

# Combine router URLs with custom URLs
urlpatterns = [
    path('dashboard/', dashboard_stats),  # custom endpoint
    path('', include(router.urls)),       # include all ViewSet endpoints
]