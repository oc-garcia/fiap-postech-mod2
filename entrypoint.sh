#!/bin/sh

# Wait for PostgreSQL to be ready
echo "Waiting for PostgreSQL to be ready..."
while ! pg_isready -q -h postgres -p 5432; do
  sleep 1
done
echo "PostgreSQL is up and running!"

# Run the SQL script
echo "Running SQL script..."
psql -h postgres -U $POSTGRES_USER -d $POSTGRES_DB -f /docker-entrypoint-initdb.d/CreateDatabase.sql

# Start the application
echo "Starting the application..."
exec npm start