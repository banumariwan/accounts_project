🔐 Django REST Framework API with Custom User and JWT Authentication

A **clean Django REST Framework project** with a **custom user model** and **JWT-based authentication**.  
Designed to practice **advanced API features** while keeping the structure minimal and easy to understand.

---

## 🚀 Features

- **Custom User model** extending `AbstractUser`
  - Extra fields: `bio`, `age`  
- **Admin panel integration** showing custom user fields  
- **JWT Authentication** using SimpleJWT:
  - Register new users
  - Login and obtain access + refresh tokens
  - Refresh access token when expired  
- **Full API-ready structure** for future expansion:
  - Permissions
  - Throttling
  - Filtering
  - Pagination  

---

## 🛠️ Tech Stack

- Python 3  
- Django 5  
- Django REST Framework  
- SimpleJWT for authentication  
- SQLite (development database)

---

## 📦 Installation

1️⃣ Clone the repository:

```bash
git clone https://github.com/banumariwan/post_api_project.git
cd post_api_project
2️⃣ Create and activate a virtual environment:

bash
Copy code
python -m venv env
# Windows
env\Scripts\activate
# Linux / Mac
source env/bin/activate
3️⃣ Install dependencies:

bash
Copy code
pip install djangorestframework
pip install djangorestframework-simplejwt
4️⃣ Apply migrations:

bash
Copy code
python manage.py makemigrations
python manage.py migrate
5️⃣ Create superuser (optional, for admin):

bash
Copy code
python manage.py createsuperuser
6️⃣ Run the server:

bash
Copy code
python manage.py runserver
🔑 Authentication Endpoints
Endpoint	Method	Description
/api/register/	POST	Register a new user
/api/token/	POST	Obtain JWT access + refresh
/api/token/refresh/	POST	Refresh access token

Example request for /api/token/:

json
Copy code
{
    "username": "banu",
    "password": "1234"
}
Example response:

json
Copy code
{
    "refresh": "<refresh_token>",
    "access": "<access_token>"
}
Use Authorization: Bearer <access_token> header to access protected endpoints.

📁 Project Structure
bash
Copy code
post_api_project/
│
├── accounts/
│   ├── models.py            # Custom User model
│   ├── serializers.py       # UserSerializer
│   ├── views.py             # Register API
│   ├── admin.py             # Admin registration
│   └── apps.py
│
├── post_api_project/
│   ├── settings.py          # AUTH_USER_MODEL + REST_FRAMEWORK config
│   └── urls.py              # JWT + register routes
│
├── manage.py
└── README.md
⭐ Learning Outcomes
Custom user model in Django

Admin panel customization

JWT authentication with access & refresh tokens

Secure API foundation for advanced features (permissions, throttling, filtering)

🔮 Future Improvements
Add user-specific data (Notes API, tasks, posts, etc.)

Add permissions & throttling

Add filtering, search, and pagination

Document API with Swagger / drf-spectacular

❤️ Author
Banu Mariwan
GitHub: banumariwan
