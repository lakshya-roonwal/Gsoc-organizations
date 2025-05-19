# approch 1 (preferred)

# Step 1: Build stage
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Install dependencies (only production dependencies are needed later)
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build your app (this could be Next.js, React, etc.)
RUN npm run build


# Step 2: Production image
FROM node:20 AS runner

# Set working directory
WORKDIR /app

# Only copy necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# If needed: add non-root user for security
RUN adduser --disabled-password appuser
USER appuser

EXPOSE 3000

# Start app in production mode
CMD ["npm", "start"]


# approch 2 (not preferred)

# FROM node:latest

# WORKDIR /app

# COPY . .

# RUN npm i

# EXPOSE 3000

# CMD [ "npm", "run", "dev" ]