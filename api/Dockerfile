FROM node:12

COPY [".", "/usr/src/pokeapi"]

WORKDIR /usr/src/pokeapi

RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]