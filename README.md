#  Youtube Trending Video Scraper built with React and Node

A web application to scrap the popular videos from Youtube, save them into
the database, and list down the video on a webpage from the database.

## Frontend 

[Checkout this live demo](https://youtube-trending-scraper.netlify.app/) of the Youtube Trending Scraper app. Once the App has launched, follow these instructions:

```sh 
1. It Automatically Loads Trending Video List on Home page 
2. Click on any Video to Play and get more descriptive information, this will redirect you to new page "/video-detail" 
3. Video Autoplay here but in mute.
4. Scrap Video using Green Button "Scrap Trending Video" on Home Page .
5. Refresh the Home page after Scraping to see the changes .
6. A Navbar menu on top is provided for easy routing  
```


## Backend Endpoint Apis

Checkout live  backend Api  [BackendApi Live Demo](https://bs-backend-nodejs.herokuapp.com/)
```
1. GET("/ping")                    : for Checking Server is up or not.
```
```
2. GET("video/scrapVideos")        : for scraping Videos 
* this may fail sometime due to Request Timeout Error *  
(request took longer than 30 seconds )

```
```
3. GET("video/fetchAllVideos")     : for fetching All Videos
```
```
4. GET("video/fetchVideoById/:id") : for fetching Video By Id
```



### Prerequisites

**NODE AND NPM**

You will need Node.js and npm on your local environment to download and run this application. Visit https://nodejs.org to learn the specifics on downloading, installing and running Node.js. npm is packaged with Node.js.

**REACT**

You will need ReactJS on your local environment to download and run this application. Visit https://reactjs.org/ to learn the specifics on downloading, intalling and running ReactJS.

## Getting Started

These instructions will get you a copy of the this application up and running on your local environment for development and testing purposes.

## Running Backend Locally (Nodejs Server )


1. Clone the project 
```
git clone https://github.com/Aman208/bluestack-task
```
2. Move to the backend directory 
```
cd bluestack-task/bs-backend
```
3. Install dependencies with the package manager
```
npm install
```
4. Start the application with the package manager
```
npm start
```
Your app should now be running on [localhost:4000](http://localhost:4000/).


## Running Frontend Locally (React App) 


1. Clone the project (Skip this Part if You already clone the repo)
```
   git clone https://github.com/Aman208/bluestack-task
```
2. Move to the frontent directory 
```
   ls 
   cd bluestack-task/bs-frontend-react
   ```
3. Install dependencies with the package manager
```
   npm install
   ```
4. Start the application with the package manager
```
   npm start
   ```

   Your app should now be running on [localhost:3000](http://localhost:3000/).


## Author

- [Aman Keshri ](https://github.com/aman208) - NIT Jamshedpur