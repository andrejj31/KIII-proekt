# 1️⃣ Build фаза
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2️⃣ Production фаза (nginx)
FROM nginx:alpine

# Го бришеме default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Го копираме нашиот nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Го копираме React build-от
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]