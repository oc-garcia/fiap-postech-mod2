# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Run
FROM node:20-alpine

WORKDIR /server

COPY --from=builder /server .

# Load environment variables from .env file
COPY .env .env

ENV NODE_ENV=production

RUN npm install --only=production

# Expose the port specified in the .env file
ARG PORT
ENV PORT=${PORT}
EXPOSE ${PORT}

CMD ["npm", "run", "start"]