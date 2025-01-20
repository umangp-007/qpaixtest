### <!-- Installation & Setup -->

1) Clone the Repository: git clone <repository-url>

2) Install Dependencies: npm install

3) Run the Application: npm run dev




### <!-- Features -->

**Homepage**:

Displays a table of student records.

Provides options to add, update, or delete students.

Includes pagination and search functionality (by Name, Age, or ID).


**Add Student**:

Form to add new student details.

Validates required fields.

Ensures age field does not accept negative numbers and hides input scroll.


**Update Student**:

Edit existing student details via a form.

Pre-fills data for easier editing.

Validates inputs, including the age field restriction.


**Delete Student**:

Delete student records with confirmation.


**Responsive Design**:

Fully responsive across devices using Bootstrap and SCSS.


**Error & Success Messages**:

Displays toast notifications for errors and success actions using react-toastify.



### <!-- Technology Stack -->

Frontend Framework: React with Vite


Language: TypeScript


State Management: Redux Toolkit


Styling: SCSS and Bootstrap


Libraries:

react-data-table-component for table functionality (pagination, filtering, sorting).

react-toastify for notifications.


Environment

Node.js: Version 20


