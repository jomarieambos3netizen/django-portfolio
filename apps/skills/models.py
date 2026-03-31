from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=50)  # e.g. Frontend, Backend

    def __str__(self):
        return self.name

class Skill(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='skills')
    name = models.CharField(max_length=50)
    proficiency = models.IntegerField(help_text="Percentage 0-100")
    order = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.name