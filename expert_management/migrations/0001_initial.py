# Generated by Django 3.1.3 on 2020-12-08 09:36

import django.contrib.gis.db.models.fields
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import django_countries.fields
import multiselectfield.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Affiliation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('department', models.CharField(blank=True, max_length=256, null=True)),
                ('street', models.CharField(blank=True, max_length=256, null=True)),
                ('post_code', models.CharField(blank=True, max_length=256, null=True)),
                ('city', models.CharField(blank=True, max_length=256, null=True)),
                ('country', django_countries.fields.CountryField(max_length=2)),
            ],
            options={
                'unique_together': {('name', 'department')},
            },
        ),
        migrations.CreateModel(
            name='Expert',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_added', models.DateField(auto_now_add=True)),
                ('date_edited', models.DateField(auto_now=True)),
                ('last_name', models.CharField(max_length=128)),
                ('first_name', models.CharField(max_length=128)),
                ('title', models.CharField(blank=True, choices=[('MS', 'Ms.'), ('MRS', 'Mrs.'), ('DR', 'Dr.'), ('PROF', 'Prof.'), ('PROF_EMERIT', 'Prof. emerit.')], max_length=16, null=True)),
                ('gender', models.CharField(blank=True, choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')], max_length=16, null=True)),
                ('position', models.CharField(max_length=256)),
                ('contact_email', models.EmailField(max_length=254, unique=True)),
                ('career_stage', models.CharField(blank=True, choices=[('UNDERGRAD', 'Undergraduate student (e.g. BSc/BA)'), ('POSTGRAD', 'Postgraduate student (Masters/PhD student)'), ('POSTDOC', 'Postdoc/Junior Researcher'), ('ACADEMIC', 'Academic (Senior Researcher, Professor)'), ('PUBLICSECTOR', 'Practitioner in the public/government sector'), ('PRIVATESECTOR', 'Practitioner or business in the private sector'), ('OTHER', 'Other (short text)')], max_length=16, null=True, verbose_name='I am ')),
                ('career_stage_note', models.CharField(blank=True, max_length=256, null=True, verbose_name='Other')),
                ('year_of_last_degree_graduation', models.PositiveIntegerField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(1900), django.core.validators.MaxValueValidator(2100)], verbose_name='Year of last degree graduation')),
                ('preferences', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('join_ecr', 'Would you like to join the MRI Early Career Researchers (ECRs) fellows group? (applies to currently enrolled students, practitioners, or postgraduate/postdoctoral scholars up to 5 years since obtaining last degree)'), ('contact_me', 'I allow MRI to contact me regarding my profile, as listed on the database, to link to and promote in its communications channels (website, social media, newsletter article).'), ('expert_registry', 'I would like to be added to an experts registry for internal use by the MRI Coordination Office to identify and connect with external requests for consultancies, expertise, provide inputs for policy briefs/policy reviews, speaking role, or interviews (such as by third parties, journalists or collaborators of the MRI).'), ('newsletter', 'I would like to receive monthly MRI Global Newsletters and Newsflashes from the MRI')], max_length=46, null=True)),
                ('official_functions', models.TextField(blank=True, help_text='Official functions that I hold in national and international programs, commissions, etc.', null=True)),
                ('upload_photo', models.ImageField(blank=True, null=True, upload_to='media/experts')),
                ('url_personal', models.URLField(blank=True, help_text='Link to personal or professional homepage', max_length=1024, null=True, verbose_name='Personal website')),
                ('url_cv', models.URLField(blank=True, help_text='Link to CV, e.g. on LinkedIn', max_length=1024, null=True, verbose_name='Curriculum Vitae')),
                ('url_researchgate', models.URLField(blank=True, help_text='Link to your profile', max_length=1024, null=True, verbose_name='ResearchGate link')),
                ('orcid', models.CharField(blank=True, help_text='ORCID is a persistent unique digital identifier that you own and control', max_length=128, null=True, unique=True, verbose_name='ORCID')),
                ('proclimid', models.CharField(blank=True, help_text='Identifier from SCNAT database', max_length=128, null=True, unique=True, verbose_name='ProClim ID')),
                ('url_publications', models.URLField(blank=True, max_length=1024, null=True, verbose_name='Link to publications')),
                ('list_publications', models.TextField(blank=True, null=True, verbose_name='Free text list of publications')),
                ('allow_public', models.BooleanField(default=True, help_text='I allow publishing my profile on the web')),
                ('allow_photo', models.BooleanField(default=True, help_text='I allow publishing my photo on the web')),
                ('affiliations', models.ManyToManyField(blank=True, help_text='Upto 3 affiliations can be added.', related_name='experts', to='expert_management.Affiliation')),
            ],
            options={
                'verbose_name': 'Expert',
                'verbose_name_plural': 'Experts',
            },
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('acronym', models.CharField(blank=True, max_length=16, null=True)),
                ('date_start', models.DateField(blank=True, null=True)),
                ('date_ending', models.DateField(blank=True, null=True)),
                ('funding_source', models.CharField(blank=True, max_length=256, null=True)),
                ('role', models.CharField(blank=True, max_length=256, null=True)),
                ('homepage', models.URLField(blank=True, max_length=1024, null=True)),
                ('location', models.CharField(blank=True, help_text='This is the location where the research is conducted or the fieldwork, not the home of research group/affiliation', max_length=256, null=True)),
                ('coordinates', django.contrib.gis.db.models.fields.PointField(srid=4326)),
                ('country', django_countries.fields.CountryField(blank=True, help_text='This is the country where the research is conducted or the fieldwork, not the home of research group/affiliation', max_length=2, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Expertise',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('research_expertise', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('basic_research', 'Basic Research'), ('applied_research', 'Applied Research'), ('research_interface_and_management', 'Research Interface and Management'), ('interdisciplinary_research', 'Interdisciplinary Research'), ('transdisciplinary_research', 'Transdisciplinary Research')], max_length=119, null=True)),
                ('atmospheric_sciences', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('meteorology', 'Meteorology'), ('climatology', 'Climatology'), ('atmospheric_physics_or_chemistry', 'Atmospheric Physics/Chemistry'), ('pollution', 'Pollution')], max_length=66, null=True)),
                ('hydrospheric_sciences', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('fresh_water_systems', 'Fresh Water Systems'), ('precipitation_and_runoff', 'Precipitation and Runoff'), ('hydrogeology', 'Hydrogeology')], max_length=57, null=True)),
                ('cryospheric_sciences', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('glaciology', 'Glaciology'), ('snow_sciences', 'Snow Sciences'), ('permafrost_and_solifluction', 'Permafrost and solifluction')], max_length=52, null=True)),
                ('earth_sciences', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('soil_science_or_pedology', 'Soil Science/Pedology'), ('geomorphology', 'Geomorphology'), ('geochemistry', 'Geochemistry'), ('geology', 'Geology'), ('physical_geography', 'Physical Geography'), ('geophysics', 'Geophysics')], max_length=89, null=True)),
                ('biological_sciences', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('botany', 'Botany'), ('zoology', 'Zoology'), ('ecology', 'Ecology'), ('terrestrial_ecosystems', 'Terrestrial Ecosystems'), ('aquatic_ecosystems', 'Aquatic Ecosystems'), ('soil_organisms', 'Soil organisms'), ('forestry', 'Forestry'), ('ecosystem_functioning', 'Ecosystem functioning'), ('ecosystem_services', 'Ecosystem services'), ('biodiversity', 'Biodiversity')], max_length=142, null=True)),
                ('social_sciences_and_humanities', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('history-classical_studies-archaeology-prehistory_and_early_history', 'History, classical studies, archaeology, prehistory and early history'), ('linguistics_and_literature-philosophy', 'Linguistics and literature, philosophy'), ('art_studies-musicology-theatre_and_film_studies-architecture', 'Art studies, musicology, theatre and film studies, architecture'), ('ethnology-social_and_human_geography', 'Ethnology, social and human geography'), ('psychology', 'Psychology'), ('educational_studies', 'Educational studies'), ('sociology-social_work', 'Sociology, social work'), ('political_sciences', 'Political sciences'), ('media_and_communication_studies', 'Media and communication studies'), ('public_health', 'Public health'), ('economics', 'Economics'), ('law', 'Law')], max_length=334, null=True)),
                ('integrated_sciences_and_humanities', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('carbon_cycle', 'Carbon Cycle'), ('other_biogeochemical_cycles', 'Other Biogeochemical Cycles'), ('hydrogeochemical_cycle', 'Hydrogeochemical Cycle'), ('nutrient_cycle', 'Nutrient Cycle'), ('social_ecological_systems', 'Social-ecological Systems')], max_length=104, null=True)),
                ('other_expertise', models.CharField(blank=True, help_text='This should be a comma seperated list', max_length=1024, null=True)),
                ('spatial_scale_of_experise', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('global_or_hemispheric', 'Global / Hemispheric'), ('continental', 'Continental'), ('regional', 'Regional'), ('national_or_cultural', 'National / Cultural'), ('local_or_community', 'Local / Community')], max_length=82, null=True)),
                ('other_spatial_scale_of_experise', models.CharField(blank=True, help_text='This should be a comma seperated list', max_length=1024, null=True)),
                ('statistical_focus', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('extremes', 'Extremes'), ('mean_change_or_trends', 'Mean Change / Trends'), ('variability', 'Variability')], max_length=42, null=True)),
                ('other_statistical_focus', models.CharField(blank=True, help_text='This should be a comma seperated list', max_length=1024, null=True)),
                ('time_scales', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('seasonal_or_annual', 'Seasonal / Annual'), ('decadal_or_centennial', 'Decadal / Centennial'), ('millenial', 'Millenial'), ('100_kyr', '100 kyr'), ('billenial', 'Billenial (Mio yrs)')], max_length=68, null=True)),
                ('other_time_scales', models.CharField(blank=True, help_text='This should be a comma seperated list', max_length=1024, null=True)),
                ('methods', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('earth_observations', 'Earth Observations'), ('remote_sensing', 'Remote sensing'), ('field_observations', 'Field observations'), ('field_experiments', 'Field Experiments'), ('modeling', 'Modeling'), ('spatial_analyses', 'Spatial analyses'), ('policy_analysis', 'Policy Analysis'), ('qualitative_social_science_methods', 'Qualitative social science methods'), ('integrative_assessments', 'Integrative assessments'), ('synthesis_and_meta-analyses', 'Synthesis and meta-analyses')], max_length=199, null=True)),
                ('other_methods', models.CharField(blank=True, help_text='This should be a comma seperated list', max_length=1024, null=True)),
                ('participation_in_assessments', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('ipcc', 'IPCC'), ('ipbes', 'IPBES'), ('undrr_gar', 'UNDRR GAR')], max_length=20, null=True)),
                ('other_participation_in_assessments', models.CharField(blank=True, help_text='This should be a comma seperated list', max_length=1024, null=True)),
                ('more_detail_about_participation_in_assessments', models.TextField()),
                ('inputs_or_participation_to_un_conventions', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('un_agenda_2030_or_un_hlpf', 'UN Agenda 2030 (SDGs) / UN HLPF'), ('unfccc', 'UNFCCC'), ('cbd', 'CBD'), ('undrr_sedai', 'UNDRR Sedai'), ('unccd', 'UNCCD')], max_length=54, null=True)),
                ('other_inputs_or_participation_to_un_conventions', models.CharField(blank=True, help_text='This should be a comma seperated list', max_length=1024, null=True)),
                ('expert', models.OneToOneField(help_text='Research expertise', on_delete=django.db.models.deletion.CASCADE, related_name='expertise', to='expert_management.expert')),
            ],
            options={
                'verbose_name': 'Expertise',
                'verbose_name_plural': 'Expertise',
            },
        ),
        migrations.AddField(
            model_name='expert',
            name='projects',
            field=models.ManyToManyField(blank=True, related_name='experts', to='expert_management.Project'),
        ),
        migrations.AlterUniqueTogether(
            name='expert',
            unique_together={('first_name', 'last_name')},
        ),
    ]
