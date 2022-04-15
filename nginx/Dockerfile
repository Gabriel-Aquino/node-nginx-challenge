FROM nginx:latest

RUN cd /usr/share/nginx/html && rm -rf index.html 
COPY index.html /usr/share/nginx/html

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]