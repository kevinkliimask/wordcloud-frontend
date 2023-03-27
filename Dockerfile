FROM node:alpine as build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4200
CMD /usr/src/app/node_modules/.bin/ng serve --host 0.0.0.0