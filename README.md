# Backend Project

This is the backend for [your project name]. It provides APIs to manage users and more.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo

2. Install Dependencies
npm install

3. Run the Application
   With Docker
    1.Build the Docker Image:
        docker build -t my-node-app .
    2.Run the Docker Container:
        docker run -p 3000:3000 my-node-app

Access the app at http://localhost:3000.

Without Docker (optional)
    npm run dev


4. Run Migrations
    npx sequelize-cli db:migrate


5. Seed the Database
    npx sequelize-cli db:seed:all
