from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from .permissions import IsMe, report3
from .models import Report, Reporter
from .serializers import ReportSerializers, ReporterSerializer
from rest_framework.generics import GenericAPIView, ListAPIView, RetrieveAPIView
from rest_framework import mixins
# Create your views here.
class ReportMixinView(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.DestroyModelMixin ,GenericAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializers

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    
    
    
class PostListView(ListAPIView):
    permission_classes = (IsMe,)
    queryset = Report.objects.all()
    serializer_class = ReportSerializers

    def get_queryset(self):
        queryset = Report.objects.all()
        post_location = self.request.query_params.get('location', None)
        if post_location is not None:
            queryset = queryset.filter(location = post_location)

        else:
            queryset = Report.objects.all()
        return queryset

class ReportRetrieve(mixins.DestroyModelMixin, mixins.UpdateModelMixin, RetrieveAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializers

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
    
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    


class ReporterView(ListAPIView):
    queryset = Reporter.objects.all()
    serializer_class = ReporterSerializer