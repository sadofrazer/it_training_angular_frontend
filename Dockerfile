FROM 18.3-alpine as angular-build
LABEL name="Frazer SADO"
LABEL email="sadofrazer@yahoo.fr"
RUN npm install npm@latest -g
RUN npm install -g @angular/cli@13
RUN mkdir /opt/angular
WORKDIR /opt/angular
COPY . .
RUN ng build
RUN ls
RUN ls


FROM nginx:stable as webapp
LABEL name="Frazer SADO"
LABEL email="sadofrazer@yahoo.fr"
COPY --from=angular-build /opt/angular/dist/angular-front-end /usr/share/nginx/html