FROM node:20.10.0-alpine as builder

WORKDIR /opt/app

COPY package.json /opt/app/package.json

RUN npm install

COPY . /opt/app

RUN npm run build

FROM nginx

COPY --from=builder /opt/app/dist /usr/share/nginx/html
