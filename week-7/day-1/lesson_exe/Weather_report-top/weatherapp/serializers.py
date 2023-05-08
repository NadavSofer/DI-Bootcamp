from rest_framework import serializers
from .models import Report, Reporter

class ReportSerializers(serializers.ModelSerializer):
    report = serializers.HyperlinkedIdentityField(view_name='report')
    author = serializers.HyperlinkedIdentityField(view_name='Reporter')
    class Meta:
        model = Report
        fields = '__all__'
        

class ReporterSerializer(serializers.ModelSerializer):
    report = serializers.HyperlinkedIdentityField(view_name='report')
    class Meta:
        model = Reporter
        fields = '__all__'