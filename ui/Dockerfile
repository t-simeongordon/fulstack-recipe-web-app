FROM node:16

WORKDIR /usr/src/app/ui

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set environment variable
ENV PORT=3000

# Expose port 3000 to the outside world
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
