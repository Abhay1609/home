from django.db import models
class Job(models.Model):
    status_choice = (
            (1, 'Actively Hiring'),
            (2, 'closed'))
    post=models.CharField(max_length=100, blank=False)
    location=models.CharField(max_length = 100,blank=False)
    duration=models.CharField(max_length = 100,blank=False)
    stipend=models.CharField(max_length=100,blank=False)
    desc=models.CharField(max_length=500, blank=False)
    criteria=models.CharField(max_length=1000, blank=False)
    opening=models.CharField(max_length=100,blank=False)
    status=models.IntegerField(choices=status_choice, default=1, blank=False)
    def __ste__(self):
        return self.post
class Query(models.Model):
    def nameFile(instance,filename):
        return '/'.join(['images',str(instance.id),filename])

    role=models.CharField(max_length=100,blank=False)
    resume=models.FileField(upload_to=nameFile,null=True,blank=True)
    def __str__(self):
        return self.role