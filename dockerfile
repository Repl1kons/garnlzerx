FROM node:20-alpine

WORKDIR /app

COPY package.json ./
RUN apk add --no-cache yarn && yarn install --frozen-lockfile

COPY . .

RUN yarn build  # сборка на этапе сборки контейнера

EXPOSE 3000

CMD ["yarn", "start"]
