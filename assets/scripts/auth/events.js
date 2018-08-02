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

const onGetMyId = function (event) {
  event.preventDefault()
  console.log('get my ID ran!')

  const data = getFormFields(this)
  // api.signIn('id')
    .then(ui.getMyId)
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
const getOneCoffeeId = function (event) {
  event.preventDefault()
  console.log('get my coffee ID ran!')

  const data = getFormFields('id')
  api.onGetOneCoffeeId(data)
    .then(ui.getCoffeeId)
}
const getAllCoffees = function (event) {
  event.preventDefault()
  console.log('got all coffees!')

  const data = getFormFields(this)
  api.onGetAllCoffees(data)
    .then(ui.getAllCoffeesSuccess)
    .catch(ui.getAllCoffeesFailure)
}

const getMyTastings = function (event) {
  event.preventDefault()
  console.log('got all tastings!')

  const data = getFormFields(this)
  api.onGetMyTastings(data)
    .then(ui.getMyTastingsSuccess)
    .catch(ui.getMyTastingsFailure)
}

const showCoffeeById = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.onShowCoffeeById(data)
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
  $('#getAllCoffees').on('click', getAllCoffees)
  $('#getMyTastings').on('click', getMyTastings)
  $('#getOneCoffeeId').on('click', getOneCoffeeId)
  $('#showCoffeeById').on('submit', showCoffeeById)
}

module.exports = {
  addHandlers
}
