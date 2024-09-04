# MERN Digital Wallet and Money Transfer Application

## Overview

This project is a full-stack MERN application that allows users to send money to other users on the platform. Additionally, it includes a digital wallet feature where users can manage their balances and transactions. The system provides secure sign-in functionality and real-time money transfer between registered users.

## Features

- **User Authentication**: Secure login and registration using JWT (JSON Web Tokens).
- **Digital Wallet**: Each user has a personal digital wallet where they can view their current balance and transaction history.
- **Money Transfer**: Users can send money to other users on the platform. All transactions are tracked and updated in real-time.
- **Transaction History**: Complete history of incoming and outgoing transfers for each user.
- **Real-time Updates**: Wallet balance and transaction history are updated in real-time upon every transfer.

## Tech Stack

- **Frontend**: React.js, Axios (or Material-UI) for responsive design
- **Backend**: Node.js, Express.js
- **Database**: MongoDB for storing user information, balances, and transactions
- **Authentication**: JWT (JSON Web Tokens) for secure sign-in
- **Real-time Updates**: WebSockets or polling for real-time updates (optional)
- **Deployment**: (Add information on your deployment platform, e.g., Heroku, Vercel)

## Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

## Usage

- **Sign up or sign in** to the application.
- Once logged in, the user will have access to their digital wallet and transaction history.
- Users can transfer money to other registered users by entering the recipient's username and the amount they wish to send.
- The wallet balance will automatically update after each transaction.

## Environment Variables

The following environment variables are required:

- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT authentication


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/KrishKPs/Paytm-Project
