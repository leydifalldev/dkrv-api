FROM node:alpine
WORKDIR /app
COPY ./package.json ./package.json
RUN yarn
CMD [ "yarn", "run", "start" ]
EXPOSE 3000