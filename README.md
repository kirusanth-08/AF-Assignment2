[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/V1F4A3D5)

# NASA React Frontend Application

Welcome to the NASA React Frontend Application! This project utilizes NASA APIs, specifically the Astronomy Picture of the Day (APOD) and Mars Rover APIs, to fetch and display space-related data. Additionally, it includes a server part for authentication, login, and registration functionalities.

## Features
- **Authentication:** Utilizes server-side authentication for user login and registration.
- **NASA APIs Integration:** Fetches data from APOD and Mars Rover APIs to display relevant information.
- **Responsive Design:** Built using React and Tailwind CSS, ensuring a responsive and visually appealing user interface across devices.

## Setup
1. **Build and install the dependencies:**  `npm run build`
3. **Start the Application:**  `npm start`

## Deployment
This application is deployed using Render, a modern cloud platform for hosting and scaling web applications. To deploy the application on Render:
1. Sign up for a Render account and create a new web service.
2. Configure the web service to deploy from your GitHub repository.
3. Set the build command to `npm run build` and the start command to `npm run start`.

## Routes
- `/`: Home page displaying general information and navigation links.
- `/menu`: Menu page providing navigation options to different sections(selecting among APOD and mars rover).
- `/apod`: Astronomy Picture of the Day (APOD) page (private route).
- `/marsrover`: Mars Rover photos page (private route).
- `/about`: About page with information about the project.
- `/login`: Login page for user authentication.
- `/register`: Register page for user registration.

## Private Routes
Private routes require authentication before accessing certain pages. If the user is not authenticated, they will be redirected to the login page.

## Live Demo
You can access the live demo of this application [here](https://af-assignment2.onrender.com/).

