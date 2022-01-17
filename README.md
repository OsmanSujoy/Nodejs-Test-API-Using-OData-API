# Nodejs-Test-API-Using-OData-API
A Node.js application with some API endpoints that call OData APIs
## Data Source: OData API

## Project Structure 
```
. 
├── dist 
├── node_modules
├── src
│   ├── public
│   │   └── listtable.js
│   ├── routes 
│   │   ├── api.ts
│   │   └── index.ts
│   ├── views
│   │   └── index.pug
│   └── index.ts 
├── package.json 
├── .env 
├── tslink.json 
├── tsconfig.json
└── README.md
```



## Step By Step - Instructions 

### .env (included for convenient)
Please modify the .env file if necessary
```python
# Set to production when deploying to production
NODE_ENV=development
#NODE_ENV=production

# Node.js server configuration
SERVER_PORT=8080
```
### Installation
Install the dependencies. 
```bash
npm install
```
### Build
Build the application.
```bash
npm run build
```
### Start
Run to start
```bash
npm start
```
## [Testing Method #01] Browser - UI
### Usage - Open in browser - [Recommanded]
```bash
http://localhost:8080/
```

## [Testing Method #02] Postman 
List API: To get the list of people.

```bash
localhost:8080/api/getList
```
Search API: Replace "YOUR_USER_NAME" in the URL with your own one.
```bash
localhost:8080/api/search?search=YOUR_USER_NAME
```
Details can be seen in the UI for the first testing method.
## Thank you!
