📚 Django Library Management System

A clean and minimal Library Management System built with Django, focusing on mastering models, relationships, CRUD operations, ORM queries, admin customization, filters, search, pagination, and aggregation.

This project is ideal for learning and practicing Django fundamentals with a real-world example — without any styling, just pure functionality.

🚀 Features
Books

Add new books

Edit existing books

Delete books

Assign author and multiple genres

Mark books as available/unavailable

Display all books with filters + pagination

Search & Filter

Search books by title or author

Filter by:

Genre

Availability

Combine search + filters seamlessly

Pagination

Paginated book list (5 per page)

Admin Panel

Fully customized Django Admin

Search fields

List filters

Horizontal genre selector

Ordering by published date

Clean layout for managing Authors, Genres, and Books

Aggregations

Count books per author

Count books per genre

Display summary data on the home page

🛠️ Tech Stack

Python 3

Django 5

SQLite (default for development)

📦 Installation
1️⃣ Clone the repository
git clone https://github.com/banumariwan/django-library-management.git
cd django-library-management

2️⃣ Create a virtual environment
python -m venv env
source env/bin/activate  # Linux/Mac
env\Scripts\activate     # Windows

3️⃣ Install dependencies
pip install -r requirements.txt

4️⃣ Apply migrations
python manage.py migrate

5️⃣ Create admin user
python manage.py createsuperuser

6️⃣ Run the server
python manage.py runserver

📁 Project Structure
library_project/
│
├── library_app/
│   ├── models.py
│   ├── admin.py
│   ├── views.py
│   ├── forms.py
│   ├── urls.py
│   └── templates/library_app/
│       ├── base.html
│       ├── book_list.html
│       ├── add_book.html
│       └── edit_book.html
│
├── library_project/
│   ├── settings.py
│   └── urls.py
│
├── manage.py
└── README.md

📘 Models Overview
Author

name

bio

(timestamps inherited)

Genre

name

(timestamps inherited)

Book

title

author (FK)

genres (M2M)

published_date

available

(timestamps inherited)

BaseModel (abstract)

created_at

updated_at

🧪 Features to Explore

This project is designed to help you practice:

Django ORM (filters, Q objects, annotations)

Query optimization

CRUD logic and forms

Pagination

Model relationships (FK, M2M)

Admin customization

Clean template structure

📌 Future Improvements (Optional)

User authentication

Book borrowing system

Dashboard analytics

API (Django REST Framework)

Styling using Tailwind or Bootstrap

Dark/light theme

❤️ Author

Banu Mariwan
GitHub: banumariwan
