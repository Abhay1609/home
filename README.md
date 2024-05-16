# Home Page of Website
Welcome to the Home Page. This project aims to showcase my skills in both frontend and backend development. It serves as a comprehensive solution, created as an assignment.

## About

This repository contains the codebase for the Home Page website. The project is structured with the backend code located in the `backend` branch and the frontend code located in the `frontend` branch.

- **Backend Branch (`backend`):** Contains the backend code built with Django, responsible for handling server-side logic, database operations, and APIs.
- **Frontend Branch (`frontend`):** Contains the frontend code responsible for the user interface, client-side interaction, and presentation layer.

## Getting Started

To set up and run the project locally, follow the instructions below:

### Backend Setup (backend branch)

1. Switch to the `backend` branch: `git checkout backend`
2. Install Python and pip if not already installed.
3. Install virtualenv: `pip install virtualenv`
4. Create a virtual environment: `virtualenv env`
5. Activate the virtual environment:
   - On Windows: `env\Scripts\activate`
   - On macOS and Linux: `source env/bin/activate`
6. Install dependencies: `pip install -r requirements.txt`
7. Configure environment variables: Update `backend/.env` file with required environment variables.
8. Run Django migrations: `python manage.py migrate`
9. Create a superuser for admin access: `python manage.py createsuperuser`
10. Run the Django development server: `python manage.py runserver`

### Frontend Setup (frontend branch)

1. Switch to the `frontend` branch: `git checkout frontend`
2. Install Node.js and npm if not already installed.
3. Install dependencies: `npm install`
4. Configure environment variables: If needed, set environment variables for frontend configuration.
5. Run the frontend development server: `npm start`

### Accessing the Application

Once both the backend and frontend servers are running, you can access the application by navigating to:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:8000](http://localhost:8000) (or as configured in Django settings)

## Contributing

We welcome contributions from the community! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.



## Contact

For any inquiries or support, please contact [Abhay Pratap] at [abhaypratap9848@gmail.com].
