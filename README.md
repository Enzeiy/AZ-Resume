# Zean's Azure Resume
This Azure Cloud Resume is a static website hosted on an Azure Storage, built with a HTTP trigger visitor counter that runs on Azure Functions and CosmosDB. The project is also paired with Github for Continuous Integration and Continuous Delivery (CI/CD).

This Project was referenced and guided by [Gwyneth Pena-Siguenza](https://github.com/madebygps).


## Architecture Diagram
![architecture](https://github.com/Enzeiy/Azure-Resume-Challenge/blob/main/Architecture%20Diagram.PNG)


## Pre-requisites
Prepare all the following files, tools, ennvironments, accounts, and resources to smoothly execute the azure resume challenge.

  - [Project Starter Files](https://github.com/ACloudGuru-Resources/acg-project-azure-resume).
  - Github Account
  - Microsoft Azure Account and Subscription
  - Latest .NET Core
  - Command-Line Interfaces:
    - Powershell
    - Bash
    - Azure CLI
  - Visual Studio Code and the following extensions:
    - Azure Functions
    - Azure Storage
    - C# Extension

# Procedures
**1. Project Setup and Github Clone Project Starter Repository**

  - Access your Github account and create your project repository.
  - Clone your own repository and the project starter repository that was provided.
  - Copy both frontend and backend folders from the starter repository to your own local repository.


**2. Frontend** 

  - Run your local project repository on Visual Studio Code.
  - Access the HTML file provided and change the necessary details for your resume.
    - note: please maintain the credits of the creator since this file is a free to use template.
  - Create the main javascript code that will have an API call. Use this [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data) article as a guide.

       
**3. Backend** 
   
  - Azure Functions and HTTP Trigger
       
    - Login to your azure account through your CLI or portal.
    - Create a Azure CosmosDB Account.
    - Create an HTTP Trigger using the Azure Function Extension in Visual Studio Code.
    - Create the necessary binding for both the Azure Function and the CosmosDB.
    - Run the Azure Function locally and verify that the HTTP trigger reflects on the Azure CosmosDB
    - Create an Azure Function Application, modify the application settings and enable CORS (Cross-Origin Resource Sharing).
    - Deploy your local azure function project to Azure Function Application.
       
  
  - Blob Website Hosting and Custom Domain Name

    - Create a storage account with a blob storage that supports static website hosting.
    - Locate your frontend files and deploy to static website via the created azure storage.
    - Create and register a custom domain name for your website using any available domain registry.
    - Create an Azure CDN, configure the required CDN profile and endpoints.
    - Create a custom domain name using any preferred domain registry.
      - note: make user to configure the CNAME mapping of your purchased custom domain.
    - Add your custom domain to you Azure CDN profile and enable custom domain HTTPS.
    - Register your custom domain to CORS settings and verify your website.

**4. Continuous Integration and Continuous Delivery**

  - Create your workflow path in your github project repository.
  - Create your frontend yml file, use this to deploy changes in your blob static website with github actions. use this yml code from [Microsoft Documentation](https://docs.microsoft.com/azure/storage/blobs/storage-blobs-static-site-github-actions)
  - Create your backend yml file, use this to deploy changes in azure functions. use this yml code from [Microsoft Documentation](https://github.com/marketplace/actions/azure-functions-action)
    
  
