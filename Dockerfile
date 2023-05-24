FROM node:20-alpine
# ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install 

COPY *.* .
COPY public ./public
COPY src ./src

CMD ["npm", "run", "dev"]