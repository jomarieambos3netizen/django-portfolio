from django.shortcuts import render

# Create your views here.
from django.views.generic import ListView
from .models import Education

class EducationListView(ListView):
    model = Education
    template_name = 'education/education_list.html'
    context_object_name = 'educations'