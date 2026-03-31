from django.shortcuts import render

# Create your views here.
from django.views.generic import ListView
from .models import Category

class SkillsView(ListView):
    template_name = 'skills/skills.html'
    context_object_name = 'categories'

    def get_queryset(self):
        return Category.objects.prefetch_related('skills').all()