# tech-challenge-client

<p align="center">
  <img src="https://res.cloudinary.com/musikverein/image/upload/v1621499148/Gifsme/logo-light_qyitwq.png" alt="Logo" width="150" height="150">
  <h1 align="center" >GifsMe</h1>
</p>

This project proposes a web platform based on giphy where you can find some gifs or memes, or also you can upload your owners media to the plataform.
Developing a client-server system, employing NodeJS, Express, MongoDB, Firebase
and Cloudinary for the back-end implementation, and ReactJS for the
front-end.

## Start 🚀

Get a clone of the project in local. Also you need to clone the server repository [tech-challenge-server](https://github.com/vvelazquezc/tech-challenge-server)
You need to have installed nodejs in your computer to develop the proyect.

### Requirements 📋

_You need to install nodejs_

Go to [NodeJs web page](https://nodejs.org/es/) download and install the
program.

_Then you have to install_

```
npm install 
```

_When yoy have installed this program you nedd to create acounts in:_

- Firebase
- MogoDB Atlas
- Cloudinary
- Google ReCaptcha

### Instalation 🔧

_When you have all the denpedencies intalled you need to create two .env files,
one in tech-challenge-client folder, and the other in tech-challenge-server folder_

_The client .env file need to contain the next variables:_

```
REACT_APP_API_BASE_URL= http://localhost:4000
REACT_APP_API_KEY = Your FireBase Api key
REACT_APP_AUTH_DOMAIN = Your FireBase auth domain
REACT_APP_PROJECT_ID = Your FireBase project id
REACT_APP_STORAGE_BUCKET = Your FireBase storage bucket
REACT_APP_MESSAGING_SENDER_ID = Your FireBase messaging sender id
REACT_APP_APP_ID = Your FireBase app id
REACT_APP_CLOUDINARY_IMG_URL = Your Cloudinary img url
REACT_APP_CLOUDINARY_PRESET_PROFILE_IMG = A Cloudinary preset to upload profile images
REACT_APP_CLOUDINARY_PRESET_SONGS = A Cloudinary preset to upload songs
REACT_APP_CLOUDINARY_PRESET_COVERS = A Cloudinary preset to upload covers images
REACT_APP_CLOUDINARY_PRESET_PLAYLIST = A Cloudinary preset to upload playlist images
REACT_APP_RECAPTCHA_WEB_KEY = Your Google ReCaptcha web key
```

_The server .env file need to contain the next variables:_

```
FB_CERT_TYPE= Your FireBase cert type
FB_CERT_PROJECT_ID= Your FireBase project id
FB_CERT_PRIVATE_KEY_ID= Your FireBase private key id
FB_CERT_PRIVATE_KEY= Your FireBase private key
FB_CERT_CLIENT_EMAIL= Your FireBase client email
FB_CERT_CLIENT_ID= Your FireBase client id
FB_CERT_AUTH_URI= Your FireBase Auth uri
FB_CERT_TOKEN_URI= Your FireBase token uri
FB_CERT_AUTH_PROVIDER_X_509_CERT_URL= Your FireBase cert auth provider x 509 cert url
FB_CERT_CLIENT_X_509_CERT_URL= Your FireBase cert client x 509 cert url
MONGO_DB_URL_PRODUCTION= Your MongoDB Atlas connection url for producction
MONGO_DB_URL_DEVELOPMENT= Your MongoDB Atlas connection url for development
MONGO_DB_URL_TEST= Your MongoDB Atlas connection url for test
RECAPTCHA_KEY = Your Google ReCaptcha secure api key
```

## Build with 🛠️

- [NodeJS](https://nodejs.org/es/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [ReactJs](https://es.reactjs.org/)
- [Redux](https://es.redux.js.org/)
- [FireBase](https://firebase.google.com/)
- [Cloudinary](https://cloudinary.com/)

## Contributing 🖇️

If you want to contribute, please fork the repository, create a new branch whit
your contribution, and push the branch as a pull requests.

## Wiki 📖

- You can find more information of how the app works in the
  [TDR](./documentation/TDR.md) file.
- You can also check the full [Memory](./documentation/Memory.pdf) on PDF.
- You can also check the custom
  [hooks](./packages/web/src/hooks/documentation.md) documentation file.

## Thanks ✨

Thanks to my classmates that although each one was doing its own project, the calls to make us company's great help.

