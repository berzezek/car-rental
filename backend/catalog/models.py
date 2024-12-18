from django.db import models
from django.core.files.base import ContentFile
from django.contrib.auth.models import User
from io import BytesIO
from PIL import Image


class ProductPhoto(models.Model):
    product = models.ForeignKey('Product', on_delete=models.CASCADE, related_name='photos')
    original_photo = models.ImageField(upload_to='photos/%Y/%m/%d')
    thumbnail = models.ImageField(upload_to='thumbnails/%Y/%m/%d', blank=True, null=True)
    photo_date = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if self.original_photo and not self.thumbnail:
            image = Image.open(self.original_photo)
            
            # Настройки размеров
            target_width, target_height = 1920, 1080

            # Определяем пропорции оригинального изображения
            original_width, original_height = image.size
            aspect_ratio = original_width / original_height
            target_aspect_ratio = target_width / target_height

            # Сохраняем пропорции или обрезаем
            if aspect_ratio > target_aspect_ratio:
                # Изображение шире целевого размера — обрезаем по ширине
                new_height = target_height
                new_width = int(target_height * aspect_ratio)
                image = image.resize((new_width, new_height), Image.Resampling.LANCZOS)
                left = (new_width - target_width) // 2
                image = image.crop((left, 0, left + target_width, target_height))
            elif aspect_ratio < target_aspect_ratio:
                # Изображение выше целевого размера — обрезаем по высоте
                new_width = target_width
                new_height = int(target_width / aspect_ratio)
                image = image.resize((new_width, new_height), Image.Resampling.LANCZOS)
                top = (new_height - target_height) // 2
                image = image.crop((0, top, target_width, top + target_height))
            else:
                # Пропорции совпадают — просто изменяем размер
                image = image.resize((target_width, target_height), Image.Resampling.LANCZOS)

            # Создаём и сохраняем миниатюру
            temp_thumb = BytesIO()
            image.save(temp_thumb, format='JPEG')
            temp_thumb.seek(0)

            self.thumbnail.save(f"thumb_{self.original_photo.name}", ContentFile(temp_thumb.read()), save=False)
            temp_thumb.close()

        super().save(*args, **kwargs)

    def __str__(self):
        return f"Photo of {self.product.id}. {self.product.title}"


class ProductCategory(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self):
        return self.title


class Product(models.Model):
    PRODUCT_STATUS_CHOICES = [
        ('active', 'Active'),
        ('inactive', 'Inactive')
    ]


    category = models.ForeignKey(ProductCategory, on_delete=models.SET_NULL, null=True, related_name='products')  
    title = models.CharField(max_length=50)
    options = models.JSONField(default=list, blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=10, choices=PRODUCT_STATUS_CHOICES, default='active')

    def __str__(self):
        return f"{self.id}.{self.title}"


