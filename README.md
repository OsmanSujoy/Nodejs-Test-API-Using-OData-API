# Nodejs-Test-API-Using-OData-API
A Node.js application with some API endpoints that call OData APIs
## Data Source: OData API

## Project Structure 
app <br />
│ <br />
├── /dist <br />
├── /node_modules <br />
├── /src <br />
│      &nbsp;&nbsp;&nbsp;&nbsp;├── /public <br />
│      &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── listtable.js <br />
│      &nbsp;&nbsp;&nbsp;&nbsp;├── /routes <br />
│      &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── api.ts <br />
│      &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── index.ts <br />
│      &nbsp;&nbsp;&nbsp;&nbsp;├── /views <br />
│      &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── index.pug <br />
│      &nbsp;&nbsp;&nbsp;&nbsp;└── index.ts <br />
├── package.json <br />
├── .env <br />
├── tslink.json <br />
├── tsconfig.json <br />
└── README.md  <br />


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
