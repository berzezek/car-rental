from django.db import models
from django.core.files.base import ContentFile
from django.contrib.auth.models import User
from io import BytesIO
from PIL import Image


class VehiclePhoto(models.Model):
    vehicle = models.ForeignKey('Vehicle', on_delete=models.CASCADE, related_name='photos')
    original_photo = models.ImageField(upload_to='photos/%Y/%m/%d')
    thumbnail = models.ImageField(upload_to='thumbnails/%Y/%m/%d', blank=True, null=True)
    photo_date = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if self.original_photo and not self.thumbnail:
            image = Image.open(self.original_photo)
            image.thumbnail((150, 150), Image.Resampling.LANCZOS)  # Устанавливаем размер миниатюры

            temp_thumb = BytesIO()
            image.save(temp_thumb, format='JPEG')
            temp_thumb.seek(0)

            # Сохраняем миниатюру в поле thumbnail
            self.thumbnail.save(f"thumb_{self.original_photo.name}", ContentFile(temp_thumb.read()), save=False)
            temp_thumb.close()

        super().save(*args, **kwargs)

    def __str__(self):
        return f"Photo of {self.vehicle.id}"


class VehicleCategory(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title


class Vehicle(models.Model):
    VEHICLE_STATUS_CHOICES = [
        ('active', 'Active'),
        ('inactive', 'Inactive')
    ]
    
    TRANSMISSION_CHOICES = [
        ('AT', 'Automatic Transmission'),
        ('MT', 'Manual Transmission'),
    ]

    ENGINE_CHOICES = [
        ('petrol', 'Petrol'),
        ('diesel', 'Diesel'),
        ('hybrid', 'Hybrid'),
        ('electric', 'Electric'),
    ]

    BRAND_CHOICES = [
        ('audi', 'Audi'),
        ('bmw', 'BMW'),
        ('chevrolet', 'Chevrolet'),
        ('citroen', 'Citroen'),
        ('fiat', 'Fiat'),
        ('ford', 'Ford'),
        ('honda', 'Honda'),
        ('hyundai', 'Hyundai'),
        ('kia', 'Kia'),
        ('mazda', 'Mazda'),
        ('mercedes', 'Mercedes'),
        ('nissan', 'Nissan'),
        ('opel', 'Opel'),
        ('peugeot', 'Peugeot'),
        ('renault', 'Renault'),
        ('seat', 'Seat'),
        ('skoda', 'Skoda'),
        ('suzuki', 'Suzuki'),
        ('toyota', 'Toyota'),
        ('volkswagen', 'Volkswagen'),
        ('volvo', 'Volvo'),
    ]

    BODY_TYPE_CHOICES = [
        ('sedan', 'Sedan'),
        ('hatchback', 'Hatchback'),
        ('station_wagon', 'Station Wagon'),
        ('suv', 'SUV'),
        ('minivan', 'Minivan'),
        ('convertible', 'Convertible'),
        ('coupe', 'Coupe'),
        ('pickup', 'Pickup'),
    ]

    category = models.ForeignKey(VehicleCategory, on_delete=models.SET_NULL, null=True, related_name='vehicles')    
    options = models.JSONField(default=list, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=10, choices=VEHICLE_STATUS_CHOICES, default='active')


class Driver(models.Model):
    user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
    phone = models.CharField(max_length=50)
    passport = models.CharField(max_length=50)
    driver_license = models.CharField(max_length=50)
    date_of_birth = models.DateField()
    address = models.TextField()
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    postal_code = models.CharField(max_length=50)
    photo = models.ImageField(upload_to='drivers/%Y/%m/%d', blank=True, null=True)

    def __str__(self):
        return f"{self.driver_license} {self.first_name} {self.last_name}"

class Order(models.Model):
    ORDER_STATUS_CHOICES = [
        ('new', 'New'),
        ('confirmed', 'Confirmed'),
        ('cancelled', 'Cancelled'),
        ('completed', 'Completed'),
    ]

    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE, related_name='orders')
    driver = models.ForeignKey(Driver, on_delete=models.CASCADE, related_name='orders')
    start_date = models.DateField()
    end_date = models.DateField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=10, choices=ORDER_STATUS_CHOICES, default='new')

    def __str__(self):
        return f"Order {self.id}"