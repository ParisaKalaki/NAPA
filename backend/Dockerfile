FROM node:lts-iron

RUN mkdir -p /app/config /app/src

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

CMD ["npm", "run", "dev"]