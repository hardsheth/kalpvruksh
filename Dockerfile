FROM node:21
WORKDIR /kalpvruksh>
COPY ./package.json ./
RUN npm install 
COPY ./ ./
RUN npm run build
EXPOSE 3000

CMD [ "npm", "start" ]