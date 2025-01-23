# Use official Node.js image
FROM node:18

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy React app
COPY . .

# Build React for production
RUN npm run build

# Hard serve "Serve"

RUN npm install -g serve

# Serve the React app with a simple server
EXPOSE 3000
CMD ["npx", "serve", "-s", "build"]
