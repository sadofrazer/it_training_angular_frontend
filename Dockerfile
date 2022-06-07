FROM node:18.3.0-alpine as angular-build
LABEL name="Frazer SADO"
LABEL email="sadofrazer@yahoo.fr"
RUN npm install npm@latest -g
RUN npm uninstall @angular-devkit/build-angular || true
RUN npm uninstall -g @angular/cli || true
RUN npm cache clean --force || true
RUN npm install -g @angular/cli@latest
RUN npm install --save-dev @angular-devkit/build-angular || true
RUN npm install || true
RUN mkdir /opt/angular
WORKDIR /opt/angular
COPY . .
RUN ng build

FROM nginx:stable as webapp
LABEL name="Frazer SADO"
LABEL email="sadofrazer@yahoo.fr"
COPY --from=angular-build /opt/angular/dist/angular-front-end /usr/share/nginx/html