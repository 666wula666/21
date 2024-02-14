from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('medicine', '0005_qshistory'),
    ]

    operations = [
        migrations.AddField(
            model_name='qshistory',
            name='user',
            field=models.CharField(default='未登录', max_length=20),
        ),
    ]
