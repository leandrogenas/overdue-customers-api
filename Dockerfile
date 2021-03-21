FROM node:14.15-alpine
RUN npm i -g concurrently @angular/cli @nestjs/cli

RUN mkdir /usr/app /usr/app/frontend /usr/app/backend

WORKDIR /usr/app/backend
COPY backend/package.json .
RUN yarn
COPY ./backend .
RUN rm -rf public/*

WORKDIR /usr/app/frontend
COPY frontend/package.json .
RUN yarn
COPY ./frontend .
RUN yarn build

#CMD npm run postinstall && npm start