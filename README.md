# petfi - Pets Adoption Platform

Welcome to the documentation for the petfi project - a platform dedicated to pet adoption. Below, you will find information about the project's frontend, backend, and instructions on how to set up and run the application.

## Frontend

### Technologies Used

- React with Vite
- Tailwind CSS
- Redux Toolkit
- Axios and SWR for API calls
- Cloudinary for image uploads

### Getting Started

1. Navigate to the frontend directory:

   ```
   cd client
   ```

2. Open `src/utils/server.js` and configure Cloudinary:

   - Change the Cloud environment name.
   - Update the Cloudinary preset name.
   - Update the REST API URL and port.

3. Install dependencies:

   ```
   npm i
   ```

4. Run the development server:

   ```
   npm run dev
   ```

## Backend

### Technologies Used

- Express.js
- MongoDB
- JSON Web Token (jsonwebtoken)

### Getting Started

1. Navigate to the backend directory:

   ```
   cd server
   ```

2. Update the environment variables in the `.env` file:

   - Change the MongoDB URI.
   - Change the JSON Web Token secret key.

3. Install dependencies:

   ```
   npm i
   ```

4. Run the server:

   ```
   npm run start
   ```

## Application

### Website

The website is divided into the following sections:

- **Header Section**: Navigate through the platform.
- **About Section**: Learn more about pet adoption and the platform's mission.
- **Product Categories**: Browse pets based on categories.
- **Product Listing**: View available pets for adoption.
- **Contact Form**: Reach out for inquiries.
- **FAQ Section**: Find answers to frequently asked questions.

### Admin

- **Login Form**: Authenticate as an admin.
- **Product Add Section**: Add new pets for adoption.
- **Product Manage Section**: Manage existing pet listings.

## Documentation

For a smooth setup and execution of the application, follow the steps mentioned above under the "Frontend" and "Backend" sections.

Feel free to reach out if you encounter any issues or have questions. Happy pet adopting! 🐾
