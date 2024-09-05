# Stage 1: Build the Angular application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN ng build --configuration production

# Stage 2: Serve the application
FROM nginx:alpine

# Copy built application from the build stage
COPY --from=build /app/dist/redbrick-project /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
