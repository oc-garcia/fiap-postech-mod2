FROM node:18-alpine

WORKDIR /usr/app

RUN apk add --no-cache bash

COPY package.json ./

RUN npm install

COPY . .

COPY wait-for-it.sh /usr/local/bin/wait-for-it.sh

RUN chmod +x /usr/local/bin/wait-for-it.sh

RUN npm run build

EXPOSE 3010

CMD ["./wait-for-it.sh", "postgres:5432", "--", "node", "build/server"]