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

ENV NODE_ENV=production

RUN npm install --only=production

CMD ["npm", "run", "start"]