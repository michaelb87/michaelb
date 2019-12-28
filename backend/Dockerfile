FROM strapi/base

WORKDIR /src

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 1337

ENV NODE_ENV production