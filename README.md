# clappy-rpg
Your quirky companion for every tabletop quest.

## 🏗️ Monorepo Structure

This is a monorepo web project with the following stack:

- **Backend**: NestJS (TypeScript)
- **Frontend**: ReactJS (TypeScript) + Vite
- **Database**: Prisma ORM (SQLite for development)
- **Containerization**: Docker + Docker Compose

## 📁 Project Structure

```
clappy-rpg/
├── packages/
│   ├── backend/          # NestJS backend application
│   │   ├── src/          # Source code
│   │   ├── prisma/       # Prisma schema and migrations
│   │   ├── Dockerfile    # Backend Docker configuration
│   │   └── package.json
│   └── frontend/         # React frontend application
│       ├── src/          # Source code
│       ├── Dockerfile    # Frontend Docker configuration
│       ├── nginx.conf    # Nginx configuration for production
│       └── package.json
├── docker-compose.yml    # Docker Compose configuration
└── package.json          # Root workspace configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher
- Docker and Docker Compose (for containerized deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Thfirmin/clappy-rpg.git
cd clappy-rpg
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
```bash
npm run prisma:generate
npm run prisma:migrate
```

### Development

Run both backend and frontend in development mode:

```bash
npm run dev
```

Or run them separately:

```bash
# Backend (runs on http://localhost:3001)
npm run dev:backend

# Frontend (runs on http://localhost:5173)
npm run dev:frontend
```

### Building

Build both applications:

```bash
npm run build
```

Or build them separately:

```bash
npm run build:backend
npm run build:frontend
```

### Linting and Testing

```bash
# Run linters
npm run lint

# Run tests
npm run test
```

## 🐳 Docker Deployment

### Using Docker Compose

Build and run the entire stack:

```bash
docker-compose up --build
```

The application will be available at:
- Frontend: http://localhost:80
- Backend API: http://localhost:3001

### Building Individual Containers

```bash
# Build backend
docker build -f packages/backend/Dockerfile -t clappy-rpg-backend .

# Build frontend
docker build -f packages/frontend/Dockerfile -t clappy-rpg-frontend .
```

## 🗄️ Database Management

### Prisma Commands

```bash
# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Open Prisma Studio (database GUI)
npm run prisma:studio
```

## 📝 Environment Variables

### Backend (.env)
```
DATABASE_URL="file:./dev.db"
PORT=3001
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:3001
```

## 🧪 Technology Stack

### Backend
- **NestJS**: Progressive Node.js framework
- **TypeScript**: Type-safe JavaScript
- **Prisma**: Next-generation ORM
- **SQLite**: Lightweight database (can be switched to PostgreSQL/MySQL)

### Frontend
- **React 19**: Modern UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server
- **ESLint**: Code quality tool

### DevOps
- **Docker**: Container platform
- **Docker Compose**: Multi-container orchestration
- **Nginx**: Web server for production frontend

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

