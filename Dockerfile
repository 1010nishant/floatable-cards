FROM node:20.12.0-alpine3.19 as build
WORKDIR /usr/app
COPY . ./
RUN npm ci
EXPOSE 5173

CMD ["npm", "run", "dev"]