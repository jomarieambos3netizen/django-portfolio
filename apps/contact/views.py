from django.shortcuts import render

# Create your views here.
from django.views.generic import FormView
from django.urls import reverse_lazy
from django.contrib import messages
from .forms import ContactForm
from .models import ContactMessage

class ContactView(FormView):
    template_name = 'contact/contact.html'
    form_class = ContactForm
    success_url = reverse_lazy('contact')

    def form_valid(self, form):
        form.save()
        messages.success(self.request, 'Thank you for your message. I will get back to you soon!')
        return super().form_valid(form)