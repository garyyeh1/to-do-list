# To-Do List App  

A simple to-do list application that demonstrates **CRUD operations** with Vanilla JavaScript, while also showcasing **Vue.js** for task filtering. Tasks are persisted in browser localStorage.  

This project started as a vanilla JavaScript app and was later extended with Vue.js to demonstrate adaptability and learning new frameworks.

---

## Demo  
https://garyyeh1.github.io/to-do-list/



## Features  
- Add new tasks with date and time  
- Mark tasks as completed or incomplete  
- Delete tasks  
- Persist tasks in **localStorage** (data remains after refresh)  
- Filter tasks by **All / Active / Completed** (using Vue.js)  

---

## Tech Stack  
- **Frontend:** HTML, CSS, Vanilla JavaScript  
- **Framework (filtering):** Vue.js  
- **Storage:** localStorage  

---

## Usage

- Add a task, select a date/time, and choose whether it’s already completed.

- Use the checkbox toggle in each task to update completion status.

- Delete tasks you no longer need.

- Use the dropdown filter to view:

- All tasks

    - Active (incomplete) tasks

    - Completed tasks

-   Refresh the page – tasks remain saved thanks to localStorage.

## Lessons Learned

1. Handling State with Vanilla JS

Initially, I tried to manage UI state directly with createElement and DOM manipulation.

Mistake: I forgot to sync the DOM state with localStorage, which caused tasks to reset on refresh.

Fix: Introduced a pageLoad() function that loads state from localStorage on startup.

2. Unique IDs & Event Binding

Mistake: Reusing element IDs caused conflicts (checkboxes not toggling correctly).

Fix: Gave each checkbox a unique ID (toggle-${i}) tied to the array index.

3. Vue.js Integration

Challenge: I didn’t want to migrate my vanilla JS, but I wanted to show Vue skills.

Solution: Integrated Vue only for filtering (All / Active / Completed), while keeping CRUD in vanilla JS.

## Next Steps 

- The app will be extended with user authentication and secure session handling so multiple users can maintain private task lists. 

User Authentication: Add secure user authentication using Node.js, Express, and JWT for login and session management. Passwords will be hashed with bcrypt.

Backend API: Develop a RESTful API to manage tasks, enabling CRUD operations. API endpoints will handle task creation, updates, and deletion, with secure user authentication.

Database Integration: Replace localStorage with a PostgreSQL database to store user data and tasks.

- Add categories or task priorities

- Improve UI with Tailwind CSS or Bootstrap

