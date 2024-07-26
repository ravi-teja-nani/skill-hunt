FROM node:18.15.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the app's source code to the container
COPY . .

# Build the React app
RUN npm build

# Serve the build
CMD ["npx", "serve", "-s", "dist"]

FROM openjdk:22
ENV PORT 8080
EXPOSE 8080

docker build -t hackathon-skill-hunt-frontend:latest .
docker tag hackathon-skill-hunt:latest us-central1-docker.pkg.dev/lloyds-hack-grp-05/cloud-run-source-deploy/hackathon-skill-hunt-frontend:latest
docker push us-central1-docker.pkg.dev/lloyds-hack-grp-05/cloud-run-source-deploy/hackathon-skill-hunt-frontend:latest

COPY target/hackathon-skill-hunt-0.0.1-SNAPSHOT.jar hackathon-skill-hunt-1.0.jar
ENTRYPOINT ["java", "-jar", "/hackathon-skill-hunt-1.0.jar"]
