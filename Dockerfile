FROM nginx:alpine

COPY config/nginx.conf /etc/nginx/

COPY build/production/backoffice /usr/share/nginx/html/