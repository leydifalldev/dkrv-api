FROM node:alpine
WORKDIR /app
RUN apk --no-cache add curl
RUN node -v
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json . 
COPY nest-cli.json .
COPY tsconfig.build.json .
COPY tslint.json .
COPY ./start.sh ./start.sh
RUN chmod +x start.sh
COPY ./src ./src
RUN yarn add node-pre-gyp
RUN yarn
EXPOSE 9500
ENTRYPOINT [ "/app/start.sh" ]