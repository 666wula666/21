from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('medicine', '0003_auto_20210331_2117'),
    ]

    operations = [
        migrations.CreateModel(
            name='BasicData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('source', models.TextField()),
                ('paozhi', models.TextField()),
                ('xingzhuang', models.TextField()),
                ('xwgj', models.TextField()),
                ('gnzz', models.TextField()),
                ('pzzy', models.TextField()),
                ('yfyl', models.TextField()),
                ('zc', models.TextField()),
                ('syzy', models.TextField()),
                ('ckzl', models.TextField()),
            ],
        ),
    ]
