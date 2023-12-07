FROM nginx

WORKDIR /usr/share/react

RUN curl -fsSL https://deb.nodesource.com/setup_17.x | bash - 
RUN apt-get install -y nodejs

COPY package*.json ./

RUN apt-get install npm -y


COPY . . 

RUN npm install react-scripts

RUN npm run build

RUN rm -r /usr/share/nginx/html/*

RUN cp -a build/. /usr/share/nginx/html