FROM node:14.11.0 AS builder

WORKDIR /home/node
COPY --chown=node:node . .

USER node

RUN yarn install
RUN REACT_APP_GIT_SHA=$(git rev-parse --short HEAD) bash -c 'yarn build'

FROM nginx:mainline-alpine

COPY --from=builder /home/node/build /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
