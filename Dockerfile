FROM node:18-alpine

ADD . /app
WORKDIR /app

RUN npm ci
EXPOSE 9000
CMD npm run start