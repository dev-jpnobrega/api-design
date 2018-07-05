FROM node:8-alpine

ADD . /src

WORKDIR /src

RUN npm i --production

CMD ["node", "./src/app.js"]