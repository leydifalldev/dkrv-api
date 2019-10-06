FROM node:alpine
WORKDIR /usr/src/app
RUN apk --no-cache add curl
RUN node -v
COPY package.json .
COPY tsconfig.json . 
COPY nest-cli.json .
COPY tsconfig.build.json .
COPY tslint.json .
COPY ./src ./src
COPY ./proto ./proto
COPY ./startdev.sh ./startdev.sh
RUN chmod +x startdev.sh
RUN yarn add node-pre-gyp
RUN yarn
EXPOSE 5000