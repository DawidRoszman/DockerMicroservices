FROM node:20.10.0-alpine

WORKDIR /opt/app

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "index.js"]
