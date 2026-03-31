from django import forms
from .models import ContactMessage

class ContactForm(forms.ModelForm):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'subject', 'message']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700'}),
            'email': forms.EmailInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700'}),
            'subject': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700'}),
            'message': forms.Textarea(attrs={'class': 'w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700', 'rows': 5}),
        }