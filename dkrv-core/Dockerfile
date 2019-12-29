FROM node:alpine
WORKDIR /usr/src/app
RUN apk --no-cache add curl python \
  python-dev \
  py-pip \
  build-base \
  && pip install virtualenv
RUN node -v
RUN rm -rf node_modules
COPY tsconfig.json . 
COPY nest-cli.json .
COPY package.json .
COPY yarn.lock .
COPY tsconfig.build.json .
COPY tslint.json .
COPY ./src ./src
COPY ./proto ./proto
RUN yarn add node-pre-gyp
RUN yarn
EXPOSE 5000
CMD [ "yarn", "run", "start:dev"]