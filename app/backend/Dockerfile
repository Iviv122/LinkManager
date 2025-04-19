FROM node
WORKDIR /Docker_Compose/backend
COPY package.json .
COPY package-lock.json . 
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]