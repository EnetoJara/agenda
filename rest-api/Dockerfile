FROM node:12.16.1 as stage1

LABEL key="Ernesto Jara Olveda"

WORKDIR /home/node/app/

COPY . .

RUN npm ci

RUN npm run build:api

FROM node:12.16.1-alpine as starter

WORKDIR /home/node/app/

COPY --from=stage1 /home/node/app/api-rest/main-bundle.js ./
RUN ls -lash
EXPOSE 3000
CMD [ "node", "./main-bundle.js" ]
