FROM node:18.3.0-alpine as angular-build
LABEL name="Frazer SADO"
LABEL email="sadofrazer@yahoo.fr"

RUN mkdir /opt/angular
WORKDIR /opt/angular
COPY . .
RUN npm install
RUN npm install -g @angular/cli@13 || true
RUN ng build --prod || npm run build --prod

FROM nginx:stable as webapp
LABEL name="Frazer SADO"
LABEL email="sadofrazer@yahoo.fr"
COPY --from=angular-build /opt/angular/dist/angular-front-end /usr/share/nginx/html