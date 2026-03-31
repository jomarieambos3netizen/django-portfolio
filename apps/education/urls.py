from django.urls import path
from . import views

urlpatterns = [
    path('', views.EducationListView.as_view(), name='education'),
]