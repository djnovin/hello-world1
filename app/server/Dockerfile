#dockerfile for express backend
FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Bundle app source
COPY . .

# Expose port 8080
EXPOSE 8000

# Run the app
CMD [ "pnpm", "dev" ]
