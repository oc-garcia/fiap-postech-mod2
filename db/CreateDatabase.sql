-- Create the appdb database
CREATE DATABASE appdb;

-- Connect to the appdb database
\c appdb;

-- Create the user table
CREATE TABLE "user"(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    cpf VARCHAR(11) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Create the role table
CREATE TABLE "role"(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create the user_role table
CREATE TABLE user_role(
    user_id SERIAL NOT NULL,
    role_id SERIAL NOT NULL,
    primary key (user_id, role_id),
    foreign key (user_id) references "user" (id) on delete cascade,
    foreign key (role_id) references "role" (id) on delete cascade
);

-- Create the post table
CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content VARCHAR(255) NOT NULL,
    creation_date TIMESTAMP WITHOUT TIME ZONE,
    update_date TIMESTAMP WITHOUT TIME ZONE,
    author SERIAL NOT NULL,
    FOREIGN KEY (author) REFERENCES "user" (id) ON DELETE CASCADE
);

-- Insert data within the user table
INSERT INTO "user"(username, name, email, cpf, password)
VALUES ('admin','administrador', 'admin@hotmail.com','12345678912', 'admin');