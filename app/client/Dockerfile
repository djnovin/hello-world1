# vite app
FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install pnpm

RUN npm install -g pnpm

# Install app dependencies

COPY package*.json ./

# Install dependencies

RUN pnpm install

# Bundle app source

COPY . .

# Expose port 3000

EXPOSE 3000

# Run the app

CMD [ "pnpm", "dev" ]

