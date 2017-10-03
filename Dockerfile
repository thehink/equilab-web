FROM node:8.5.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app
RUN yarn install
RUN yarn build

ENV PORT=80

EXPOSE 5000
CMD [ "yarn", "start" ]
