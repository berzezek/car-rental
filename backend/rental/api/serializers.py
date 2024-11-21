from rest_framework import serializers
from rental.models import VehiclePhoto, VehicleCategory, Vehicle, Driver, Order


class VehiclePhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehiclePhoto
        fields = '__all__'


class VehicleCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = VehicleCategory
        fields = '__all__'


class VehicleSerializer(serializers.ModelSerializer):
    photos = VehiclePhotoSerializer(many=True, read_only=True)
    category = serializers.PrimaryKeyRelatedField(queryset=VehicleCategory.objects.all(), write_only=True)
    category_data = VehicleCategorySerializer(source='category', read_only=True)
    price = serializers.DecimalField(max_digits=10, decimal_places=2, coerce_to_string=False)

    class Meta:
        model = Vehicle
        fields = '__all__'

    def to_representation(self, instance):
        """
        This ensures that `category_data` is included in the serialized output for GET requests,
        while `category` (ID) is used for POST/PUT requests.
        """
        representation = super().to_representation(instance)
        representation['category'] = VehicleCategorySerializer(instance.category).data
        return representation


class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    vehicle = VehicleSerializer(read_only=True)
    driver = DriverSerializer(read_only=True)

    class Meta:
        model = Order
        fields = '__all__'
