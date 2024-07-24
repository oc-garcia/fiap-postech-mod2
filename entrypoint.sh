#!/bin/sh

# Wait for PostgreSQL to be ready
echo "Waiting for PostgreSQL to be ready..."
for i in $(seq 1 30); do
  if pg_isready -q -h postgres -p 5432; then
    echo "PostgreSQL is up and running!"
    break
  fi
  echo "PostgreSQL not yet ready. Waiting..."
  sleep 5
done

if ! pg_isready -q -h postgres -p 5432; then
  echo "PostgreSQL did not become ready in time. Exiting."
  exit 1
fi

# Run the SQL script
echo "Running SQL script..."
psql -h postgres -U $POSTGRES_USER -d $POSTGRES_DB -f /docker-entrypoint-initdb.d/CreateDatabase.sql

# Start the application
echo "Starting the application..."
exec npm start