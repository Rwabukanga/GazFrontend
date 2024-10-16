# Step 1: Use Node.js as the base image
FROM node:16-alpine AS build-stage

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the Vue.js project to the container
COPY . .

# Step 6: Build the Vue.js project for production
RUN npm run build

# Step 7: Use a lightweight web server (Nginx) for serving the built files
FROM nginx:alpine AS production-stage

# Step 8: Copy the built files to Nginx's default directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Step 9: Copy a custom Nginx configuration if needed (optional)
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Step 10: Expose port 80 to the host machine
EXPOSE 80

# Step 11: Start Nginx
CMD ["nginx", "-g", "daemon off;"]
