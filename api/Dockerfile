FROM node:16-alpine

WORKDIR /usr/src/app/api

COPY . .

RUN npm i

ENV PORT=3080

EXPOSE 3080

CMD ["npm", "run", "start:dev"]
