FROM node:10.15.1-alpine

WORKDIR /app/frontend
COPY package.json /app/frontend

RUN npm install
RUN npm rebuild node-sass

COPY . /app/frontend

CMD ["npm", "start"]

