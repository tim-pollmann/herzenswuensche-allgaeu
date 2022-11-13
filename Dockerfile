FROM node:18
RUN npm install -g npm@9.1.1
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build && \
    npm prune --omit=dev

ARG port
EXPOSE ${port}
ENTRYPOINT [ "npm", "run", "start" ]
