FROM node:latest

RUN npm install -g npm@latest

WORKDIR /var/project

RUN chmod 777 -R ./

CMD [ "npm", "run", "serve" ]