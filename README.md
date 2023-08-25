# Polling System API
Welcome to the Node.js and Express.js Polling System API Application! This API allows you to manage questions and options for a polling system. 

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone this repository to your local machine:

   ```sh
   git clone https://github.com/your-username/express-api-app.git

   ```
2. Navigate to the project directory:
    ```sh
    cd polling-system
    ```
3. Install the required dependencies:
    ```sh
    npm install
    ```
4. Run the server
    ```sh
    npm run dev
    ```
    The server will start on port 5173 by default. You can access the API at http://localhost:5173 .

### API Endpoints

- `POST /questions/create` : Create a question
- `POST /questions/:id/options/create` : Create an option
- `DELETE /questions/:id/delete` : Delete a question
- `DELETE /options/:id/delete` : Delete an option
- `GET /options/:id/add_vote` : Increments the vote
- `GET /questions/:id` : Gets the question

### Tech Stack

- Node.js - JavaScript runtime environment.
- Express.js - Web application framework for building APIs.
- MongoDB - NoSQL database for data storage.
