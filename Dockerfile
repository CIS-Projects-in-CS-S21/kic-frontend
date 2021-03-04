FROM node:15.11.0-alpine3.10 AS base

COPY package.json /usr/code/

COPY yarn.lock /usr/code/

WORKDIR /usr/code

RUN yarn install
RUN yarn global add expo-cli

COPY . /usr/code

RUN expo build:web

FROM nginx:alpine AS prod

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=base /usr/code/web-build/ .

ENTRYPOINT ["nginx", "-g", "daemon off;"]