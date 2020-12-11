from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse
from django.shortcuts import get_object_or_404, redirect
from django.urls import reverse_lazy
from django.views import generic

from .forms import ProjectForm
from .models import Affiliation, Expert, Project


class Signup(generic.CreateView):
    form_class = UserCreationForm
    template_name = "registration/signup.html"
    success_url = "/accounts/login/"


class GoogleMapAPIKeyMixin:
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["google_map_api_key"] = settings.MAP_WIDGETS["GOOGLE_MAP_API_KEY"]
        return context

class Profile(GoogleMapAPIKeyMixin, generic.DetailView):
    queryset = Expert.objects.all()
    pk_url_kwarg = "username"
    template_name = "expert_management/profile.html"

    def get_object(self, queryset=None):
        if queryset is None:
            queryset = self.queryset
        pk = self.kwargs.get(self.pk_url_kwarg)
        try:
            obj = queryset.get(user=get_object_or_404(get_user_model(), username=pk))
        except Expert.DoesNotExist:
            return None
        else:
            return obj

    def render_to_response(self, context, **response_kwargs):
        if not context['object']:
            if self.kwargs.get(self.pk_url_kwarg) == self.request.user.username:
                return redirect('create-profile')
            return HttpResponse(f"The profile for \"{self.kwargs.get(self.pk_url_kwarg)}\" does not exists yet!")
        return super().render_to_response(context, **response_kwargs)


class CreateProfile(LoginRequiredMixin, generic.CreateView):
    model = Expert
    template_name = "expert_management/create-profile.html"

    success_url = reverse_lazy('projects')

    # You may be wondering why I mentioned all field names except user
    # instead of __all__ and setting exclude attribute to ('user',)
    # because exclude attribute is not working and the ordering of fields
    # is not according to our wishes
    fields = (
        "last_name", "first_name", "title", "gender", "position",
        "affiliations", "contact_email", "career_stage",
        "career_stage_note", "year_of_last_degree_graduation",
        "preferences", "official_functions", "upload_photo",
        "url_personal", "url_cv", "url_researchgate", "orcid",
        "proclimid", "url_publications",
        "list_publications", "allow_photo", "allow_public",
    )
    def get(self, *args, **kwargs):
        try:
            self.model.objects.get(user=self.request.user)
        except self.model.DoesNotExist:
            return super().get(*args, **kwargs)
        else:
            return redirect('update-profile')

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)

    class Meta:
        exclude = ("user",)


class UpdateProfile(LoginRequiredMixin, generic.UpdateView):
    model = Expert
    template_name = "expert_management/update-profile.html"

    # You may be wondering why I mentioned all field names except user
    # instead of __all__ and setting exclude attribute to ('user',)
    # because exclude attribute is not working and the ordering of fields
    # is not according to our wishes
    fields = (
        "last_name", "first_name", "title", "gender", "position",
        "affiliations", "contact_email", "career_stage",
        "career_stage_note", "year_of_last_degree_graduation",
        "preferences", "official_functions", "upload_photo",
        "url_personal", "url_cv", "url_researchgate", "orcid",
        "proclimid", "url_publications",
        "list_publications", "allow_photo", "allow_public",
    )
    def get(self, *args, **kwargs):
        try:
            self.model.objects.get(user=self.request.user)
        except self.model.DoesNotExist:
            return redirect('create-profile')
        else:
            return super().get(*args, **kwargs)

    def get_object(self, queryset=None):
        if queryset is None:
            queryset = self.queryset
        return get_object_or_404(self.model, user=self.request.user)

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)
    class Meta:
        exclude = ("user",)

class ProjectList(GoogleMapAPIKeyMixin, LoginRequiredMixin, generic.ListView):
    def get_queryset(self):
        return Project.objects.filter(user=self.request.user)

class CreateProject(GoogleMapAPIKeyMixin, LoginRequiredMixin, generic.CreateView):
    form_class = ProjectForm
    template_name = "expert_management/create-project.html"
    success_url = reverse_lazy("projects")

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)


class DeleteProject(LoginRequiredMixin, generic.DeleteView):
    success_url = reverse_lazy("projects")

    def get_queryset(self):
        return Project.objects.filter(user=self.request.user)
