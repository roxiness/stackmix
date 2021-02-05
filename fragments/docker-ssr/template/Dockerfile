FROM node:current-alpine
RUN apk add --no-cache git

RUN mkdir /code
WORKDIR /code

COPY . /code/
RUN npm install

CMD ["npm", "run", "serve:ssr"] 


