# Bloodlink - Blood Donation System 💉

## Overview 🚀

Bloodlink is a cutting-edge web application designed to provide rapid access to blood donors and recipients across Pakistan. This platform connects individuals in need of blood with registered blood donors through a user-friendly interface, ensuring a safe, efficient, and sufficient blood supply during emergencies. The goal of the project is to build a reliable network of blood donors and recipients, facilitating quicker responses and saving lives.

## Motivation 💡

The primary motivation behind the development of Bloodlink is to provide a fast and reliable blood donation network. In emergencies, time is critical, and having an accessible network can make a significant difference. Bloodlink ensures that people can find blood donors or recipients near them without the hassle of verifying compatibility or dealing with fraudulent users.

### Goals:
- Provide an efficient blood donation network across Pakistan.
- Build a reliable and accessible network of blood donors.
- Simplify the process of requesting and donating blood.

### Benefits:
- Quicker access to blood donors in emergency situations.
- A larger pool of accessible donors and recipients, improving the speed and efficiency of finding suitable matches.

## Key Features 🔑

### User Features:
- **Sign Up** and **Login** functionalities for users to create and manage their profiles.
- **Profile Management**: Update personal details and status (active/inactive).
- **Donation History**: Donors can view their past donations.
- **Request Blood**: Recipients can request blood from available donors.
- **Broadcast Messages**: Recipients can send a broadcast message to all users.
- **Request Management**: Users can view and manage their pending requests.

### Admin Features:
- **User Verification**: Admins can verify and accept/reject new user signups.
- **Donation History**: Admins can view the total history of all blood donations.
- **Filtering**: Admins can apply filters to search through donation records.

## System Design & Architecture ⚙️

Bloodlink is a cross-platform web application built using modern web technologies. The system is designed to be responsive and support multiple languages, ensuring accessibility for a wide audience in Pakistan. It uses a centralized database to store user profiles, donation requests, and history, ensuring real-time updates and smooth functionality.

- **Frontend**: HTML, CSS, JavaScript (React.js, Bootstrap)
- **Backend**: Node.js, Express (or any suitable backend framework)
- **Database**: MySQL, PostgreSQL
- **Third-Party APIs**: Google Translate API

## Use Cases 📋

The application includes several use cases such as:
- **Sign Up/Sign In**: Users (both donors and recipients) can create accounts and log in.
- **Donate Blood**: Donors can view pending donation requests and accept or reject them.
- **Request Blood**: Recipients can search for active donors based on blood type and location and request donations.
- **Admin Management**: Admins can view the donation history, accept/reject new users, and filter records based on various criteria.

For a detailed list of use cases, see the **Use Cases** section in the project documentation.

## Installation 🛠️

To run the project locally, follow the steps below:

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/bloodlink.git
    ```

2. Install the required dependencies:

    ```bash
    cd bloodlink
    npm install  # or use yarn install if using yarn
    ```

3. Set up your environment variables:
    - Configure the database connection.
    - Set up the Google Translate API key for language support.

4. Start the application:

    ```bash
    npm start
    ```

The application will now be running on `http://localhost:3000`.

