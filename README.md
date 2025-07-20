## Description

**ProjexBio Server** - A NestJS backend for the ProjexBio platform, a collaborative project showcase platform for college students and faculty.

This project is built with:
- [NestJS](https://nestjs.com/) - Progressive Node.js framework
- [Prisma](https://www.prisma.io/) - Database ORM
- [PostgreSQL](https://www.postgresql.org/) - Database
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Docker](https://www.docker.com/) - Containerization

## Quick Start with Docker (Recommended)

The easiest way to get started is using Docker. This ensures consistent environments across all machines.

### Quick Start

**Note**: The backend runs on port 4000 internally, but is accessible externally on port 3002.

### Docker Setup Details

The Docker setup includes:
- **NestJS Application**: Running on port 4000 (internal) / 3002 (external)
- **PostgreSQL Database**: Running on port 5433
- **Environment Variables**: Loaded from `.env` file
- **Hot Reload**: Enabled for development
- **Volume Mounting**: Code changes reflect immediately
- **Automatic Migrations**: Prisma migrations run automatically on startup

```bash
# Clone the repository
git clone https://github.com/projexbio/projexbio-server
cd projexbio-server

# Copy environment variables
cp env.example .env
# Edit .env with your configuration

# Start the application with Docker Compose
docker-compose up -d

# The application will be available at:
# - API: http://localhost:3002
# - Swagger Docs: http://localhost:3002/api
# - Health Check: http://localhost:3002/health
# - Database: localhost:5433
```
