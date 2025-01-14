# Task Management System

This is a task management application built using Node.js and Express, with MySQL as the database. The application allows users to manage tasks and users.

## Features
- **User Management**: Add, update, and delete users.
- **Task Management**: Create and manage tasks assigned to users.
- **Views**: Uses Handlebars as the template engine to render views.
- **Database**: MySQL for data storage, with Objection.js as the ORM framework.

---

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js
- MySQL
- Knex.js (used for migrations)

---

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/ankki457/user-task-manager.git
   cd user-task-manager
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. **Database Configuration**:
   
   - Create a MySQL database using the SQL script provided below.
   - Configure the `.env` file with your MySQL database credentials.

---

## `.env` File

Create a `.env` file in the root of the project with the following contents:

```
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=Your Password
DB_NAME=trainee_task
DB_PORT=3306

# Application Configuration
APP_PORT=3000
PORT=3000
```

---

## Database Setup

1. **Create the Database**:
   Run the following SQL commands in your MySQL client (CLI, phpMyAdmin, or MySQL Workbench):

   ```sql
   CREATE DATABASE trainee_task;
   SHOW DATABASES;
   GRANT ALL PRIVILEGES ON trainee_task.* TO 'root'@'localhost' IDENTIFIED BY 'Ankit@457';
   FLUSH PRIVILEGES;
   ```

2. **Run Migrations**:
   Once you have set up the `.env` file and database, run the migrations:

   ```bash
   npx knex migrate:latest
   ```

   This will create the `users` and `tasks` tables in the `trainee_task` database.

---

## Running the Application

To start the server:

```bash
node app.js
```

The application will be running at `http://localhost:3000`.

---

## Views

- The application uses **Handlebars** as the template engine for rendering views.
- You can customize the views inside the `views/` folder.

---

## Routes

- `/api/v1/users/showusers`: Home page that lists all users and tasks.
- `/api/v1/users/users`: Add or list users.
- `/api/v1/users/tasks`: Add or list tasks.
- `/api/v1/users/export`:export “Users” and their related “Task” in an excel sheet.

---

## ORM and Database

- **ORM Framework**: Objection.js (https://vincit.github.io/objection.js/)
- **Database**: MySQL
- **View Engine**: Handlebars (https://handlebarsjs.com/)

---

## Notes

- The application does not use frontend frameworks like React or Angular. It relies on Handlebars for rendering HTML views.
- For production deployment, make sure to use a secure database connection configuration and adjust the `.env` accordingly.
- For further customization, you can modify the controllers and views as needed.
  ![Screenshot (116)](https://github.com/user-attachments/assets/07af2b12-7036-4a4d-bf15-15b3377f53ba)
![Screenshot (117)](https://github.com/user-attachments/assets/17714d7d-8903-44c3-8abb-fb0688cf4c6f)
![Screenshot (118)](https://github.com/user-attachm![Screenshot (119)](https://github.com/user-attachments/assets/06ebf515-e621-44b6-b83f-777695eef41d)
ents/assets/57591eb4-60bf-4263-ab20-b693dff4e1d3)
![Screenshot (121)](https://github.com/user-attachments/assets/db43ddac-4a89-4216-b218-f5e6c470501b)
![Screenshot (120)](https://github.com/user-attachments/assets/b1a22dd8-0a50-405a-b4fc-04901f903081)
![Screenshot (122)](https://github.com/user-attachments/assets/a670db73-8e89-49de-9789-1b9d04b94359)
![Screenshot (123)](https://github.com/user-attachments/assets/db6771c3-3c0a-45ec-acc7-b0b993ab7791)
