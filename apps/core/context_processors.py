from apps.core.models import Profile

def global_context(request):
    try:
        profile = Profile.objects.first()
    except Exception:
        profile = None
    return {
        'profile': profile,
    }