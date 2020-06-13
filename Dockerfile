FROM node:12

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build

EXPOSE 4000

CMD npm run start