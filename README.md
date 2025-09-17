# Frontend Developer Internship – Assignment

This is my submission for the **Frontend Developer Internship Assignment**.  
The project is built using **React + Vite**, and demonstrates skills in **React, Redux Toolkit, React Router, API Fetching, and clean UI implementation**.

---

##  Live Demo  
[Click here to view the deployed app](https://frontend-internship-dw7d.vercel.app/)  

---

##  Project Overview

This project consists of **three main pages**:

| Route    | Description                                                                 

| `/`      | Home page with buttons to navigate to the "To-Do" and "GitHub" pages        
| `/todo`  | A To-Do app with task management (add, delete, search) using Redux Toolkit  
| `/github`| GitHub User Search Dashboard (fetches and displays user details from API)   

---

## 🛠️ Technologies Used

- **React (Vite)**
- **Redux Toolkit** – for state management  
- **React Router** – for routing between pages  
- **Fetch API** – for GitHub user search  
- **CSS** – for styling  

---

##  Features

###  Home Page (`/`)
- Two buttons: *To-Do* and *GitHub*  
- Navigation using React Router  

###  To-Do App (`/todo`)
- Add new tasks  
- Delete tasks  
- Search tasks by name  
- Displays default hardcoded tasks  
- Uses Redux Toolkit for state management  

###  GitHub User Search (`/github`)
- Input field + Search button  
- Displays:
  - Avatar
  - Name or Username
  - Bio
  - Location
  - Followers count
  - Public repositories count
- Handles states:
  - Loading
  - Error (invalid username )

---

##  Installation & Setup

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/Dhanraj-choudhary/frontend-internship.git

# Navigate to the project directory
cd frontend-internship

# Install dependencies
npm install

# Start the development server
npm run dev
