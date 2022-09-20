FROM node:16.11.1-slim AS base

LABEL authors "timofey.sidorov <timofey.sidorov@mati.io>"
ENV NODE_ENV=development

FROM base as install

ENV NPM_CONFIG_LOGLEVEL error
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm ci

FROM install as source

COPY /. .

FROM source as development
ENV NODE_ENV=development
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
# CMD ["npm", "test:e2e"]
