from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'product-photos', views.ProductPhotoViewSet)
router.register(r'product-categories', views.ProductCategoryViewSet)
router.register(r'products', views.ProductViewSet)

urlpatterns = router.urls