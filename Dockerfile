FROM node:18-alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . . 

RUN apt-get update && apt-get install -y netcat 

RUN npm run build

RUN chmod +x /usr/local/bin/wait-for-it.sh 

EXPOSE 3010

CMD ["node", "build/server"]