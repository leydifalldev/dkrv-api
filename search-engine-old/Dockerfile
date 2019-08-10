FROM node:10.15.3
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN node -v
RUN rm -rf node_modules
RUN rm -rf dist
RUN npm install npm@latest -g
RUN npm install typescript -g
RUN npm install
RUN npm rebuild --target=10.15.3 --target_platform=linux --target_arch=x64 --target_libc=glibc --update-binary
EXPOSE 9500
ENTRYPOINT ["npm", "run", "dev"]