# dev-shop-web-ui

This is the web user interface for the dev shop

Demo: [https://dev-shop-web-ui.herokuapp.com/](https://dev-shop-web-ui.herokuapp.com/)

# Requirements

* NodeJS
* Github Account
* Instance of [dev-shop-api](https://github.com/patrick93/dev-shop-api) running

# Run local

Update the file `config/development.js` with the Github credentials and the URL to the dev-shop-api

```javascript
export default {
    CART_API_URL: "http://localhost:5000",
    GITHUB_AUTH: {
        username: '',
        password: ''
    }
}
```

Install dependicies:

```npm install```

Run:

```npm run dev```



