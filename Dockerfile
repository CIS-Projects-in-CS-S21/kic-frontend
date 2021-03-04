FROM node:15.11.0-alpine3.10

COPY package.json /usr/code/

COPY yarn.lock /usr/code/

WORKDIR /usr/code

RUN yarn install
RUN yarn global add expo-cli

COPY . /usr/code


ENTRYPOINT ["expo", "start", "--web"]