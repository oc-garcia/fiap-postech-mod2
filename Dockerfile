FROM node:18-alpine

RUN apk --no-cache add postgresql-client

WORKDIR /usr/app

COPY package.json ./
RUN npm install

COPY . .

RUN npm run build

COPY entrypoint.sh /usr/app/entrypoint.sh

EXPOSE 3010

CMD ["sh", "/usr/app/entrypoint.sh"]