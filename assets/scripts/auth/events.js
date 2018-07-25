'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// ~~~~~~~~~~~~~~~~~~~~~~`
//  FORM FIELD FUNCTIONS
// ~~~~~~~~~~~~~~~~~~~~~~`

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addCoffee = function (event) {
  event.preventDefault()
  console.log('coffee recorded!')

  const data = getFormFields(this)
  api.onCoffeeSubmit(data)
    .then(ui.addCoffeeSuccess)
    .catch(ui.addCoffeeFailure)
}
const addTasting = function (event) {
  event.preventDefault()
  console.log('tasting recorded!')

  const data = getFormFields(this)
  api.onTastingSubmit(data)
    .then(ui.addTastingSuccess)
    .catch(ui.addedTastingFailure)
}

// ~~~~~~~~~~~~~~~~~~~~~~
// HANDLERS
// ~~~~~~~~~~~~~~~~~~~~~~

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#coffee').on('submit', addCoffee)
  $('#tasting').on('submit', addTasting)
}

module.exports = {
  addHandlers
}
