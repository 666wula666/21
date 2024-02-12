
from django.db import migrations, models


class  Migration(migrations.Migration):


    dependencies = [
        ('medicine', '0002_test'),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=40)),
                ('author', models.CharField(max_length=40)),
                ('paragraph_1', models.TextField()),
                ('paragraph_2', models.TextField()),
                ('image', models.CharField(max_length=100)),
            ],
        ),
        migrations.DeleteModel(
            name='Test',
        ),
    ]
