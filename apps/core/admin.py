from django.contrib import admin
from .models import Profile, Achievement, AchievementImage


class AchievementImageInline(admin.TabularInline):
    model = AchievementImage
    extra = 3  # shows 3 empty image slots by default

@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    inlines = [AchievementImageInline]
    list_display = ('id', 'order')
    ordering = ('order',)

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'email')