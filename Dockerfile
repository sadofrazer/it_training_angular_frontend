FROM node:18.3.0-alpine as angular-build
LABEL name="Frazer SADO"
LABEL email="sadofrazer@yahoo.fr"
RUN npm install npm@latest -g
RUN npm install
RUN npm uninstall -g @angular/cli || true
RUN npm cache clean --force
RUN npm install -g @angular/cli@13
RUN npm install --save-dev @angular-devkit/build-angular
RUN npm install
RUN mkdir /opt/angular
WORKDIR /opt/angular
COPY . .
RUN ng build

FROM nginx:stable as webapp
LABEL name="Frazer SADO"
LABEL email="sadofrazer@yahoo.fr"
COPY --from=angular-build /opt/angular/dist/angular-front-end /usr/share/nginx/html