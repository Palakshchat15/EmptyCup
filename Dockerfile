# Use official Node.js LTS image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy only the package files initially for dependency caching
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy all frontend source code
COPY . .

# Expose Vite's default dev server port
EXPOSE 5173

# Start the Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]
