FROM nginx:alpine-slim
LABEL authors="rozhr"

COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/defalt.conf