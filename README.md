# Ramos Real Estate Listing Platform

A CMS-powered real estate listing platform built with Django and Docker. Designed as part of a Full Stack Developer assessment for Ramos Real Estate, this application allows internal teams to manage property listings, link agents, and provide a clean, responsive browsing experience for end-users.


## ✅ Project Summary

- Admin-side property management
- Filterable public listings
- Agent and team representation
- Detail pages for properties
- A fully responsive UI built using Django templates and Tailwind CSS
- Containerized architecture using Docker
- PostgreSQL-backed database hosted on Render

---
## Features


### 🧑‍💼 Admin (CMS) Side
- Add, edit, delete property listings via Django admin
- Attach listing agents to each property

### 🌍 Public-Facing Side
- Property listings page with search and filter (location, price, bedrooms, etc.)
- Dynamic property detail pages with images, specs, and agent information
- Agent/team page to showcase listing professionals
- SEO-friendly URLs using slugs
- Responsive and mobile-ready layout

## Technologies Used
| Layer         | Technology                   |
|---------------|-------------------------------|
| Backend       | Django 4.x (Python 3.11)       |
| Database      | PostgreSQL (Hosted on Render) |
| Frontend      | Tailwind CSS, HTML, JS         |
| Auth System   | Django built-in authentication |
| Containerization | Docker + Docker Compose     |
| Hosting       | Render                        |

---

### Prerequisites
- Python 3.8
- Django
- PostgreSQL

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/ramos-real-estate-platform.git/
   ```

2. **Create a virtual environment:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure the database:**
   Update the `DATABASES` settings in `settings.py` with your PostgreSQL credentials.

5. **Run migrations:**
   ```bash
   python manage.py migrate
   ```

6. **Create a superuser:**
   ```bash
   python manage.py createsuperuser
   ```

7. **Run the development server:**
   ```bash
   python manage.py runserver
   ```

8. **Access the app:**
   Open your browser and go to `http://127.0.0.1:8000/`

## Usage

### For Landlords
1. **Sign Up/Login:**
   Create an account or log in.
2. **Add Properties:**
   Navigate to the 'Add Property' section and fill in the details.
3. **Manage Properties:**
   View and update property listings.

### For Tenants
1. **Sign Up/Login:**
   Create an account or log in.
2. **Browse Listings:**
   Use the search and filter options to find suitable apartments or rooms.
3. **Book a Property:**
   Select a property and complete the booking process.
4. **Make Payments:**
   Navigate to the 'Payments' section and complete the payment process.

### For Real Estate Company Staff
1. **Sign Up/Login:**
   Create an account or log in.
2. **Manage Properties:**
   View and manage multiple properties.
3. **Handle Tenant Requests:**
   Manage maintenance requests and tenant communications.
4. **Generate Reports:**
   Navigate to the 'Reports' section to generate performance reports.

## Contributing

We welcome contributions to improve the Real Estate Company Web App. To contribute, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature-branch-name
   ```
3. **Make your changes and commit them:**
   ```bash
   git commit -m 'Description of the feature or fix'
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature-branch-name
   ```
5. **Create a pull request.**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Django](https://www.djangoproject.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Contact

For any inquiries or support, please contact:

- **Email:** support@realestatecompany.com
- **GitHub:** [https://github.com/yourusername/realestate-company-app](https://github.com/yourusername/realestate-company-app)

---

Thank you for using the Real Estate Company Web App!