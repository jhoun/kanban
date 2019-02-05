FROM node:10.0

WORKDIR /app/frontend
COPY package.json /app/frontend

RUN npm install
RUN npm rebuild node-sass

COPY . /app/frontend

CMD ["npm", "start"]

