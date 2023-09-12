from django.db import models

# Create your models here.
class Mv_data(models.Model):
    movie_name = models.CharField(max_length=100)
    des = models.TextField()
def __str__(self):
    return self.movie_name
    