from rest_framework.views import APIView
from rest_framework.response import Response

from certifications.api.serializers import CertificateSerializer
from certifications.models import Certificate
from users.models import User
from rest_framework import status


class CertificateView(APIView):
    def get(self, request, username):
        try:
            user = User.objects.get(username=username)
            certificates = Certificate.objects.filter(user=user)
            serializer = CertificateSerializer(certificates, many=True)
            return Response(serializer.data)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request):
        user = User.objects.get(id=request.user.id)
        serializer = UserUpdateSerializer(user, request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)