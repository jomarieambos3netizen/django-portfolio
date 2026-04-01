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


from django.db import models

# Create your models here.
