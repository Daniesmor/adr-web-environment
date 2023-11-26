from rest_framework import serializers
from education.models import Degree


class DegreeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Degree
        fields = ['id','degree', 'university', 'start_year', 'end_year', 'photo']