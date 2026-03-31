from django.contrib import admin
from .models import Category, Skill

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'proficiency', 'order')
    list_editable = ('order',)  # allows inline editing of order
    list_filter = ('category',)
    search_fields = ('name',)
    ordering = ('category', 'order')