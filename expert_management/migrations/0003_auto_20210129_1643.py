# Generated by Django 3.1.4 on 2021-01-29 16:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('expert_management', '0002_auto_20210126_0640_squashed_0003_auto_20210126_0707'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='expertise',
            name='disciplinary_expertise',
        ),
        migrations.RemoveField(
            model_name='geomountainsregistry',
            name='is_geomountains_member',
        ),
    ]