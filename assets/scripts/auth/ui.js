'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  // $('#message').text('Signed up successfully')
  // $('#message').css('background-color', 'green')
  $('#sign-out').removeClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#signUpSuccess').modal({show: true})
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  // $('#message').text('Error on sign up')
  // $('#message').css('background-color', 'red')
  $('#signInFailure').modal({show: true})
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  // $('#message').text('Signed in successfully')
  // $('#message').css('background-color', 'green')
  $('#game-new').removeClass('unclickable')
  $('#sign-out').removeClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#signInSuccess').modal({show: true})
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
  // $('#message').text('Error on sign in')
  // $('#message').css('background-color', 'red')
  $('#signInFailure').modal({show: true})
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  // $('#message').text('Signed out successfully')
  // $('#message').css('background-color', 'green')
  $('#sign-in').removeClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#signOutSuccess').modal({show: true})
  // console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
  // $('#message').text('Error on sign out')
  // $('#message').css('background-color', 'red')
  $('#signOutFailure').modal({show: true})
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  // $('#message').text('Changed password successfully')
  // $('#message').css('background-color', 'green')
  $('#changePasswordSuccess').modal({show: true})
  // console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  // $('#message').text('Error on change password')
  // $('#message').css('background-color', 'red')
  $('#changePasswordFailure').modal({show: true})
  console.error('changePasswordFailure ran. Error is :', error)
}

const addCoffeeSuccess = function () {
  // $('#message').text('added coffee successfully')
  // $('#message').css('background-color', 'green')
  $('#addCoffeeSuccess').modal({show: true})
  console.log('addCoffeeSuccess ran and nothing was returned!')
}

const addCoffeeFailure = function (error) {
  // $('#message').text('Error on add coffee')
  // $('#message').css('background-color', 'red')
  $('#addCoffeeFailure').modal({show: true})
  console.error('addCoffeeFailure ran. Error is :', error)
}
const addTastingSuccess = function () {
  // $('#message').text('added tasting successfully')
  // $('#message').css('background-color', 'green')
  $('#addTastingSuccess').modal({show: true})
  console.log('addTastingSuccess ran and nothing was returned!')
}

const addTastingFailure = function (error) {
  // $('#message').text('Error on add tasting')
  // $('#message').css('background-color', 'red')
  $('#addTastingFailure').modal({show: true})
  console.error('addTastingFailure ran. Error is :', error)
}

const getMyCoffeesSuccess = function () {
  // $('#message').text('got coffees successfully')
  // $('#message').css('background-color', 'green')
  $('#getMyCoffeesSuccess').modal({show: true})
  console.log('getMyCoffeesSuccess ran and nothing was returned!')
}
const getMyCoffeesFailure = function () {
  // $('#message').text('error on get coffees')
  // $('#message').css('background-color', 'green')
  $('#getMyCoffeesFailure').modal({show: true})
  console.log('getMyCoffeesFailure ran and nothing was returned!')
}

const acc = document.getElementsByClassName('accordion')
let i

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active')
    const panel = this.nextElementSibling
    if (panel.style.display === 'block') {
      panel.style.display = 'none'
    } else {
      panel.style.display = 'block'
    }
  })
}
// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  acc,
  addCoffeeFailure,
  addCoffeeSuccess,
  addTastingSuccess,
  addTastingFailure,
  getMyCoffeesSuccess,
  getMyCoffeesFailure
}
