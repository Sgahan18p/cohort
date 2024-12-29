# 📚 Course Selling Website

## Description
This is a full-stack course-selling platform where:
- **Admins** can create, edit, and manage courses.
- **Users** can sign up, browse, and purchase courses.

---

## Features
### Admin Features
- Sign up as an admin.
- Log in to manage courses.
- Create, update, and view courses.
- Publish or unpublish courses.

### User Features
- Sign up as a user.
- Log in to browse courses.
- Purchase courses.
- View purchased courses.

---

## Routes

### 🔑 **Admin Routes**
1. **POST /admin/signup**  
   - **Description:** Creates a new admin account.  
   - **Input:**  
     ```json
     { "username": "admin", "password": "pass" }
     ```
   - **Output:**  
     ```json
     { "message": "Admin created successfully" }
     ```

2. **POST /admin/login**  
   - **Description:** Authenticates an admin.  
   - **Headers:**  
     ```json
     { "username": "admin", "password": "pass" }
     ```
   - **Output:**  
     ```json
     { "message": "Logged in successfully" }
     ```

3. **POST /admin/courses**  
   - **Description:** Creates a new course.  
   - **Headers:**  
     ```json
     { "username": "admin", "password": "pass" }
     ```  
   - **Body:**  
     ```json
     { "title": "course title", "description": "course description", "price": 100, "imageLink": "https://linktoimage.com", "published": true }
     ```
   - **Output:**  
     ```json
     { "message": "Course created successfully", "courseId": 1 }
     ```

4. **PUT /admin/courses/:courseId**  
   - **Description:** Edits an existing course.  
   - **Headers:**  
     ```json
     { "username": "admin", "password": "pass" }
     ```  
   - **Body:**  
     ```json
     { "title": "updated title", "description": "updated description", "price": 200, "imageLink": "https://updatedlinktoimage.com", "published": false }
     ```
   - **Output:**  
     ```json
     { "message": "Course updated successfully" }
     ```

5. **GET /admin/courses**  
   - **Description:** Fetches all courses.  
   - **Headers:**  
     ```json
     { "username": "admin", "password": "pass" }
     ```
   - **Output:**  
     ```json
     { "courses": [ { "id": 1, "title": "course title", "description": "course description", "price": 100, "imageLink": "https://linktoimage.com", "published": true } ] }
     ```

---

### 👤 **User Routes**
1. **POST /users/signup**  
   - **Description:** Creates a new user account.  
   - **Input:**  
     ```json
     { "username": "user", "password": "pass" }
     ```
   - **Output:**  
     ```json
     { "message": "User created successfully" }
     ```

2. **POST /users/login**  
   - **Description:** Authenticates a user.  
   - **Headers:**  
     ```json
     { "username": "user", "password": "pass" }
     ```
   - **Output:**  
     ```json
     { "message": "Logged in successfully" }
     ```

3. **GET /users/courses**  
   - **Description:** Lists all available courses.  
   - **Headers:**  
     ```json
     { "username": "user", "password": "pass" }
     ```
   - **Output:**  
     ```json
     { "courses": [ { "id": 1, "title": "course title", "description": "course description", "price": 100, "imageLink": "https://linktoimage.com", "published": true } ] }
     ```

4. **POST /users/courses/:courseId**  
   - **Description:** Purchases a course.  
   - **Headers:**  
     ```json
     { "username": "user", "password": "pass" }
     ```
   - **Output:**  
     ```json
     { "message": "Course purchased successfully" }
     ```

5. **GET /users/purchasedCourses**  
   - **Description:** Lists all purchased courses.  
   - **Headers:**  
     ```json
     { "username": "user", "password": "pass" }
     ```
   - **Output:**  
     ```json
     { "purchasedCourses": [ { "id": 1, "title": "course title", "description": "course description", "price": 100, "imageLink": "https://linktoimage.com", "published": true } ] }
     ```

---

## 📦 Technologies Used
- **Backend:** Node.js, Express.js
- **Frontend:** React.js
- **Database:** MongoDB
- **Authentication:** JWT

---

## 🚀 How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/course-selling-website.git
   cd course-selling-website
