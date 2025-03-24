FROM node:22-alpine as build

ENV NODE_ENV=development

WORKDIR /app
COPY package.json tsconfig.json tsconfig.build.json ./
RUN yarn

COPY nest-cli.json nest-cli.json 

COPY src src

ENTRYPOINT yarn start:dev