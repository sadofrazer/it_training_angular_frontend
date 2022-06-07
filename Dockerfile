FROM ubuntu:20.04 as angular-build
LABEL name="Frazer SADO"
LABEL email="sadofrazer@yahoo.fr"
RUN apt update -y && apt install curl -y
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt install nodejs -y
RUN node --version || apt install npm -y
RUN npm install npm@latest -g
RUN npm install -g @angular/cli
RUN mkdir /opt/angular
WORKDIR /opt/angular
COPY . .
RUN ng build

FROM nginx:stable as webapp
LABEL name="Frazer SADO"
LABEL email="sadofrazer@yahoo.fr"
COPY --from=angular-build /opt/angular/dist/angular-front-end /usr/share/nginx/html