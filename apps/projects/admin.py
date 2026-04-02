from django.contrib import admin
from .models import Project, ProjectImage

class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1
    fields = ('image', 'caption', 'order')
    ordering = ('order',)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'featured', 'created_at')
    list_editable = ('featured',)
    list_filter = ('featured', 'created_at')
    search_fields = ('title', 'description', 'tech_stack')
    readonly_fields = ('created_at',)
    prepopulated_fields = {'slug': ('title',)}
    inlines = [ProjectImageInline]
    fieldsets = (
        (None, {
            'fields': ('title', 'slug', 'description', 'tech_stack', 'image')
        }),
        ('Metadata', {
            'fields': ('featured', 'created_at')
        }),
    )