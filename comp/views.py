

from .models import Job,Query
from .serializers import JobSerializer,QuerySerializer
from rest_framework import viewsets

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class= JobSerializer
class QueryViewSet(viewsets.ModelViewSet):
    queryset = Query.objects.all()
    serializer_class = QuerySerializer
