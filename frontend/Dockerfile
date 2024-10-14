# Stage 1: Build the React app
FROM node:22 AS build-stage

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the app with NGINX
FROM nginx:alpine AS production-stage

# Copy built files from the build stage to NGINX
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy SSL certificates into the image
COPY ../../../etc/letsencrypt/live/godown.himeshkundal.tech/fullchain.pem /etc/letsencrypt/live/godown.himeshkundal.tech/
COPY ../../../etc/letsencrypt/live/godown.himeshkundal.tech/privkey.pem /etc/letsencrypt/live/godown.himeshkundal.tech/

# Copy custom NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose ports
EXPOSE 80
EXPOSE 443

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
