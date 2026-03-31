from django.db import models

class Education(models.Model):
    institution = models.CharField(max_length=200)
    degree = models.CharField(max_length=200)
    start_year = models.IntegerField()
    end_year = models.IntegerField(null=True, blank=True)
    description = models.TextField(blank=True)

    class Meta:
        ordering = ['-end_year', '-start_year']

    def __str__(self):
        return f"{self.degree} at {self.institution}"