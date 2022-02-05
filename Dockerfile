FROM node:17.4.0-alpine3.14

WORKDIR /app

COPY ./ /app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]