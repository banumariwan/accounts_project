from django.shortcuts import render, redirect, get_object_or_404
from django.core.paginator import Paginator
from django.db.models import Count, Q
from .models import Book, Author, Genre
from .forms import BookForm

def book_list(request):
    query = request.GET.get('q')
    books = Book.objects.all().order_by('-published_date')

    if query:
        books = books.filter(Q(title__icontains=query) | Q(author__name__icontains=query))

    genre_filter = request.GET.get('genre')
    if genre_filter:
        books = books.filter(genres__id=genre_filter)

    available_filter = request.GET.get('available')
    if available_filter in ['True', 'False']:
        books = books.filter(available=available_filter == 'True')

    paginator = Paginator(books, 5)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    authors = Author.objects.annotate(book_count=Count('books'))
    genres = Genre.objects.annotate(book_count=Count('books'))

    context = {
        'books': page_obj,
        'page_obj': page_obj,
        'authors': authors,
        'genres': genres,
        'query': query,
        'genre_filter': genre_filter,
        'available_filter': available_filter,
    }
    return render(request, 'library_app/book_list.html', context)

def add_book(request):
    if request.method == 'POST':
        form = BookForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('book_list')
    else:
        form = BookForm()
    return render(request, 'library_app/add_book.html', {'form': form})

def edit_book(request, id):
    book = get_object_or_404(Book, id=id)
    if request.method == 'POST':
        form = BookForm(request.POST, instance=book)
        if form.is_valid():
            form.save()
            return redirect('book_list')
    else:
        form = BookForm(instance=book)
    return render(request, 'library_app/edit_book.html', {'form': form})




def delete_book(request, id):
    book = get_object_or_404(Book, id=id)
    if request.method == 'POST':
        book.delete()
        return redirect('book_list')
    return render(request, 'library_app/delete_book.html', {'book': book})