FROM node
WORKDIR /Docker_Compose/frontend
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5741
CMD [ "npm", "run", "dev" ]