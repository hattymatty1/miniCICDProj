# CI/CD Pipeline with Jenkins on AWS EC2

This project demonstrates a CI/CD pipeline built using Jenkins on an AWS EC2 instance. The pipeline automates the process of deploying a demo Node.js application, including steps for cloning the project, building a Docker image, pushing the image to DockerHub, and deploying the application.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Project Overview](#project-overview)
- [Setup](#setup)
- [Pipeline Steps](#pipeline-steps)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

- **AWS EC2 Instance**: Ensure you have an AWS EC2 instance (preferably Linux) set up with proper SSH access.
- **Jenkins**: Install Jenkins on the EC2 instance. Follow [this guide](https://www.jenkins.io/doc/book/installing/) for installation instructions.
- **Docker**: Docker should be installed on the instance where Jenkins is hosted.
- **DockerHub Account**: You need a DockerHub account to push Docker images.
- **Node.js Project**: A sample Node.js application to deploy as part of the pipeline.
- **GitHub Repository**: The Node.js application should be hosted on GitHub, which will be cloned as part of the pipeline.

## Project Overview

This project sets up a CI/CD pipeline in Jenkins to automate the following processes:
1. **Clone GitHub Repository**: Pulls the latest code of a Node.js project from GitHub.
2. **Build Docker Image**: Creates a Docker image of the Node.js application.
3. **Push Docker Image to DockerHub**: Pushes the Docker image to DockerHub for later deployment.
4. **Deploy Application**: Runs a container from the Docker image to deploy the application on the web server.

## Setup

1. **Set Up Jenkins on AWS EC2**: Follow the [Jenkins installation guide for Linux](https://www.jenkins.io/doc/book/installing/linux/) on your EC2 instance.
   
2. **Configure Docker in Jenkins**:
   - Install Docker and verify the Docker daemon is running.
   - Give Jenkins access to Docker (often by adding the Jenkins user to the Docker group).

3. **Install Required Plugins in Jenkins**:
   - Docker Pipeline Plugin
   - Git Plugin
   - Any additional plugins you might need for your Node.js application.

4. **Configure DockerHub Credentials**:
   - In Jenkins, go to **Manage Jenkins > Manage Credentials**.
   - Add DockerHub credentials with your DockerHub username and password, so Jenkins can push images to your account.

5. **Create a Jenkins Pipeline Job**:
   - In Jenkins, create a new Pipeline job.
   - Configure the job to pull the pipeline script from your GitHub repository or add the pipeline script directly in the job configuration.

## Pipeline Steps

The Jenkins pipeline consists of the following steps:

1. **Clone Repository**:
   - Clone the Node.js application code from GitHub to the Jenkins workspace.
   
2. **Build Docker Image**:
   - Build a Docker image for the Node.js application, using the provided Dockerfile.
   
3. **Push Docker Image to DockerHub**:
   - Tag the Docker image and push it to your DockerHub repository.

4. **Deploy Application**:
   - Pull the Docker image from DockerHub and run it as a container on the EC2 instance.


### Explanation of Pipeline Script

- **Clone Repository**: Clones the main branch of the GitHub repository into the Jenkins workspace.
- **Build Docker Image**: Builds a Docker image using the Dockerfile in the repository.
- **Push Docker Image to DockerHub**: Authenticates to DockerHub using the stored credentials, then pushes the Docker image.
- **Deploy Application**: Pulls the latest image from DockerHub and runs it as a container, exposing the application on port 80.

## Usage

1. Trigger the Jenkins pipeline manually or set up a webhook to automatically trigger it when there are changes to the GitHub repository.
2. After the pipeline completes, you should be able to access the Node.js application running on your AWS EC2 instance’s public IP.

## Contributing

Feel free to submit issues, fork the repository, and send pull requests to enhance this project.

## License

This project is open-source and available under the [MIT License](LICENSE).
