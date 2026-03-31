from django.urls import path
from . import views

urlpatterns = [
    path('', views.SkillsView.as_view(), name='skills'),
]