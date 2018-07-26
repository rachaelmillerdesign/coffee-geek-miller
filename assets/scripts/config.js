'use strict'

let apiUrl
const apiUrls = {
  production: 'https://rachaelmillerdesign.github.io/coffee-geek-miller/',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
