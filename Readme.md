# web app taxi Version 1.0

## Framework 
- sencha ExtJs 6.2.x gpl <p>
- sencha Cmd 7.3.x


# Frontend con Docker

## Doker eliminar imagen 
docker rmi web-app-admin:latest

## Doker Build
 docker build -t web-app-admin:latest .

 ## Doker Run
 docker run -d -p 8084:80 --restart always --name web-app-admin  web-app-admin:latest

 ## Push Docker Hub

 docker login 

 ## Preparar docker hub 

 docker tag web-app-admin eerazozamudio/web-app-admin:latest

 ## Docker push docker hub

 docker push eerazozamudio/web-app-admin:latest
 
