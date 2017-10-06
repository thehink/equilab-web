FROM node:8.5.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app
# RUN yarn install

ADD package.json /tmp/package.json
ADD yarn.lock /tmp/yarn.lock
ADD internal/scripts/preinstall.js /tmp/internal/scripts/preinstall.js
RUN cd /tmp && yarn install
RUN cp -a /tmp/node_modules /usr/src/app

RUN yarn build

ENV PORT=80

EXPOSE 5000
CMD [ "yarn", "start" ]
