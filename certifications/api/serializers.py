from rest_framework import serializers
from certifications.models import Certificate


class CertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificate
        fields = ['id','user', 'name', 'company', 'expedition', 'certfication_id', 'certificate_link', 'photo']