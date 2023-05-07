from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from .models import Report
from .serializers import ReportSerializers
# Create your views here.
class ReportView(APIView):

    permission_classes = (IsAdminUser,)

    def get(self, request, *args, **kwargs):
        queryset = Report.objects.all()
        Serializer = ReportSerializers(queryset, many=True)
        return Response(Serializer.data)