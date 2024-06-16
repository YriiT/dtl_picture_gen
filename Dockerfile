FROM node:18

RUN mkdir -p /dtl-pic-gen/node_modules 

WORKDIR /dtl-pic-gen


RUN npm install
RUN npm run build
