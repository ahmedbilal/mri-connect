# Generated by Django 3.1.3 on 2020-11-17 21:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('people', '0005_auto_20201117_1057'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='gender',
            field=models.CharField(blank=True, choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')], max_length=16, null=True),
        ),
        migrations.AlterField(
            model_name='person',
            name='upload_photo',
            field=models.ImageField(blank=True, null=True, upload_to='media/people'),
        ),
    ]
