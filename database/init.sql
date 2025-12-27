-- Create Database (if not exists is not supported in CREATE DATABASE inside a block usually, but this runs on init)
-- In Postgres docker image, the DB specified in POSTGRES_DB is created automatically.
-- We can add extra extensions or initial data here.

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table creation is handled by Hibernate (ddl-auto=update), but for production we should use migration scripts.
-- For this academic project, we will rely on Hibernate for schema creation to keep it simple as per "Complete Project" prompt often implies working code first.
-- However, I will add some initial data if tables exist.
