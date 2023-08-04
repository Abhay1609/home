from rest_framework import serializers
from .models import Job,Query




class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model= Job
        fields = '__all__'
class QuerySerializer(serializers.ModelSerializer):
    class Meta:
        model=Query
        fields='__all__'

