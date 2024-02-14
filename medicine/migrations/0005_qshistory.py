from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('medicine', '0004_basicdata'),
    ]

    operations = [
        migrations.CreateModel(
            name='QSHistory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.TextField()),
                ('ans', models.TextField()),
                ('satisfy', models.IntegerField(default=1)),
            ],
        ),
    ]
