from django.db import models


class Profile(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    tagline = models.TextField()
    profile_photo = models.ImageField(upload_to='profile/')
    summary = models.TextField()
    years_experience = models.IntegerField(default=20)
    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    email = models.EmailField()
    instagram_url = models.URLField(blank=True)
    facebook_url = models.URLField(blank=True)
    address = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        verbose_name_plural = 'Profile'

    def __str__(self):
        return self.name

class Achievement(models.Model):
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name_plural = 'Achievements'

    def __str__(self):
        return f'Achievement {self.id}'


class AchievementImage(models.Model):
    achievement = models.ForeignKey(Achievement, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='achievements/')

    def __str__(self):
        return f'Image for Achievement {self.achievement.id}'

from django.db import models

# Create your models here.
