FROM node:20-alpine

WORKDIR /server

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "run", "start"]