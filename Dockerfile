FROM node:18-alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3010

CMD ["node", "build/server"]