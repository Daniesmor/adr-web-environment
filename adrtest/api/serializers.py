from rest_framework import serializers
from users.api.serializers import UserSerializer
from adrtest.models import TestData


class AdrTestSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = TestData
        fields = ['date', 'user', 'name', 'id', 
                  'first_weight', 
                  'second_weight', 
                  'third_weight',
                  'fourth_weight',
                  'fifth_weight',
                  'first_vel',
                  'second_vel',
                  'third_vel',
                  'fourth_vel',
                  'fifth_vel']