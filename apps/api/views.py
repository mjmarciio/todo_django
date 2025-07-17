from rest_framework import viewsets, permissions
from .models import Task
from apps.api.serializer import TaskSerializer
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [SearchFilter, DjangoFilterBackend]
    search_fields = ['title']
    filterset_fields = ['is_completed']

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user).order_by('-created_at')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
