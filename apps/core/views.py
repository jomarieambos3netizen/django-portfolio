from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView
from .models import Profile, Achievement
from apps.projects.models import Project

class HomeView(TemplateView):
    template_name = 'core/home.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['profile'] = Profile.objects.first()
        context['featured_projects'] = Project.objects.filter(featured=True)[:3]
        return context

class AboutView(TemplateView):
    template_name = 'core/about.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['profile'] = Profile.objects.first()
        context['achievements'] = Achievement.objects.prefetch_related('images').all()
        return context