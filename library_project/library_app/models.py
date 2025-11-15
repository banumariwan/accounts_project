from django.db import models

class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Author(BaseModel):
    name = models.CharField(max_length=100)
    bio = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Genre(BaseModel):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Book(BaseModel):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='books')
    genres = models.ManyToManyField(Genre, related_name='books', blank=True)
    published_date = models.DateField()
    available = models.BooleanField(default=True)

    def __str__(self):
        return self.title
