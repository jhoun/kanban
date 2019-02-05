# Kanban Board

Kanban board application to help you track your tasks. Users can create a task, update a task, or delete a task. This application is built with React w/ Redux, SASS preprocessor, Knex/Bookshelf, and PostgreSQL database. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development. 

## Set Up

### Docker
1. Install [Docker](https://www.docker.com/get-started) 
2. Create `.env` file in your root directory
  - see example.env 
3. Run `docker-compose up` in your terminal
4. View on browser `http://localhost:3000/`

### KNEX Migration & Seed
1. Change into server directory `cd server`
2. Run `knex migrate:latest` to build tables in Postgres
3. Run `knex seed:run` to seed data into newly created tables



