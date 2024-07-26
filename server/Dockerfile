FROM node:20-alpine

WORKDIR /server

COPY package*.json .

RUN npm install

RUN npm run build

EXPOSE 3010

CMD ["npm", "run", "start"]