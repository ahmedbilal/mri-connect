"""mriconnect URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import include, path
from django.views.generic import RedirectView


from expert_management.views import Signup

urlpatterns = [
    # Password management paths
    path('pwd/reset',
        auth_views.PasswordResetView.as_view(template_name='admin/password_reset_form.html'),
        name='password_reset_form'),
    path('pwd/done',
        auth_views.PasswordResetDoneView.as_view(template_name='admin/password_reset_done.html'),
        name='password_reset_done'),
    path('pwd/confirm/<uidb64>/<token>/',
        auth_views.PasswordResetConfirmView.as_view(template_name='admin/password_reset_confirm.html'),
        name='password_reset_confirm'),
    path('pwd/complete',
        auth_views.PasswordResetDoneView.as_view(template_name='admin/password_reset_complete.html'),
        name='password_reset_complete'),

    # Main application path
    path('mri/', admin.site.urls),
    path('accounts/', include("django.contrib.auth.urls")),
    path('accounts/signup/', Signup.as_view(), name='signup'),

    path('', include("expert_management.urls")),

    # Redirect home page
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
