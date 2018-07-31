'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#sign-out').removeClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#signUpSuccess').modal({
    show: true
  })
  setTimeout(function () {
    $('#signUpSuccess').modal('hide')
  }, 2000)
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#signInFailure').modal({
    show: true
  })
  setTimeout(function () {
    $('#signUpFailure').modal({
      show: false
    })
  }, 2000)
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#sign-out').removeClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#myId').removeClass('hidden')
  console.log('signInSuccess ran. Data is :', data)
  $('#signInSuccess').modal({
    show: true
  })
  setTimeout(function () {
    $('#signInSuccess').modal('hide')
  }, 2000)
  store.user = data.user
}
let getMyId = function (data) {
  if ('signInSuccess') {
    document.getElementById('myId').innerHTML
    return data.user.id
  }
}

const signInFailure = function (error) {
  $('#signInFailure').modal({
    show: true
  })
  setTimeout(function () {
    $('#signInFailure').modal('hide')
  }, 2000)
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#sign-in').removeClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#signOutSuccess').modal({
    show: true
  })
  setTimeout(function () {
    $('#signOutSuccess').modal('hide')
  }, 2000)
  // console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
  $('#signOutFailure').modal({
    show: true
  })
  setTimeout(function () {
    $('#signOutFailure').modal('hide')
  }, 2000)
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#changePasswordSuccess').modal({
    show: true
  })
  setTimeout(function () {
    $('#changePasswordSuccess').modal('hide')
  }, 2000)
  // console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('#changePasswordFailure').modal({
    show: true
  })
  setTimeout(function () {
    $('#changePasswordFailure').modal('hide')
  }, 2000)
  console.error('changePasswordFailure ran. Error is :', error)
}

const addCoffeeSuccess = function () {
  $('#addCoffeeSuccess').modal({
    show: true
  })
  setTimeout(function () {
    $('#addCoffeeSuccess').modal('hide')
  }, 2000)
  console.log('addCoffeeSuccess ran and nothing was returned!')
}

const addCoffeeFailure = function (error) {
  $('#addCoffeeFailure').modal({
    show: true
  })
  setTimeout(function () {
    $('#addCoffeeFailure').modal('hide')
  }, 2000)
  console.error('addCoffeeFailure ran. Error is :', error)
}
const addTastingSuccess = function () {
  $('#addTastingSuccess').modal({
    show: true
  })
  setTimeout(function () {
    $('#addTastingSuccess').modal('hide')
  }, 2000)
  console.log('addTastingSuccess ran and nothing was returned!')
}

const addTastingFailure = function (error) {
  $('#addTastingFailure').modal({
    show: true
  })
  setTimeout(function () {
    $('#addTastingFailure').modal('hide')
  }, 2000)
  console.error('addTastingFailure ran. Error is :', error)
}

const getMyCoffeesSuccess = function (data) {
  $('#getMyCoffeesSuccess').modal({
    show: true
  })
  setTimeout(function () {
    $('#getMyCoffeesSuccess').modal('hide')
  }, 2000)
  console.log('getMyCoffeesSuccess ran and the data is ', data)
  console.log('In getMyCoffeeSuccess and data.coffees is ', data.coffees)
  generateCoffeeTableDiv(data)
  // targeting the div element below get my coffees button where the table will go
}

const getMyCoffeesFailure = function () {
  $('#getMyCoffeesFailure').modal({
    show: true
  })
  setTimeout(function () {
    $('#getMyCoffeesFailure').modal('hide')
  }, 2000)
  console.log('getMyCoffeesFailure ran and nothing was returned!')
}

let i
const acc = document.getElementsByClassName('accordion')

for (i = 0; i < acc.length; i++) {
  console.log('counter: ', i)
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

const generateCoffeeTableDiv = function (data) {
  const table = document.createElement('table')
  let tableRow = document.createElement('tr')
  let tableData = document.createElement('th')
  tableData.innerHTML = 'id'
  tableRow.appendChild(tableData)
  tableData = document.createElement('th')
  tableData.innerHTML = 'roaster'
  tableRow.appendChild(tableData)
  tableData = document.createElement('th')
  tableData.innerHTML = 'blend'
  tableRow.appendChild(tableData)
  tableData = document.createElement('th')
  tableData.innerHTML = 'rating'
  tableRow.appendChild(tableData)
  tableData = document.createElement('th')
  tableData.innerHTML = 'favorite'
  tableRow.appendChild(tableData)
  table.appendChild(tableRow)
  for (let row = 0; row < data.coffees.length; row++) {
    tableRow = document.createElement('tr')
    tableData = document.createElement('td')
    tableData.innerHTML = data.coffees[row]['id']
    tableRow.appendChild(tableData)
    tableData = document.createElement('td')
    tableData.innerHTML = data.coffees[row]['roaster']
    tableRow.appendChild(tableData)
    tableData = document.createElement('td')
    tableData.innerHTML = data.coffees[row]['blend']
    tableRow.appendChild(tableData)
    tableData = document.createElement('td')
    tableData.innerHTML = data.coffees[row]['rating']
    tableRow.appendChild(tableData)
    tableData = document.createElement('td')
    tableData.innerHTML = data.coffees[row]['favorite']
    tableRow.appendChild(tableData)
    table.appendChild(tableRow)
  }
  document.getElementById('myCoffeesTable').appendChild(table)
  console.log('adding table', table)
}

const generateTastingsTable = function (data) {
  const table = document.createElement('table')
  let tableRow = document.createElement('tr')
  let tableData = document.createElement('th')
  tableData.innerHTML = 'roaster'
  tableRow.appendChild(tableData)
  tableData = document.createElement('th')
  tableData.innerHTML = 'blend'
  tableRow.appendChild(tableData)
  tableData = document.createElement('th')
  tableData.innerHTML = 'rating'
  tableRow.appendChild(tableData)
  tableData = document.createElement('th')
  tableData.innerHTML = 'favorite'
  tableRow.appendChild(tableData)
  tableData = document.createElement('th')
  tableData.innerHTML = 'tasting_notes'
  tableRow.appendChild(tableData)
  tableData = document.createElement('th')
  tableData.innerHTML = 'grams_in'
  tableRow.appendChild(tableData)
  tableData = document.createElement('th')
  tableData.innerHTML = 'grams_out'
  tableRow.appendChild(tableData)
  tableData = document.createElement('th')
  tableData.innerHTML = 'time'
  tableData = document.createElement('th')
  tableData.innerHTML = 'temperature'
  tableRow.appendChild(tableData)
  tableData = document.createElement('th')
  tableData.innerHTML = 'extraction_notes'
  tableRow.appendChild(tableData)
  table.appendChild(tableRow)
  for (let row = 0; row < data.tastings.length; row++) {
    tableRow = document.createElement('tr')
    tableData = document.createElement('td')
    tableData.innerHTML = data.tastings[row]['roaster']
    tableRow.appendChild(tableData)
    tableData = document.createElement('td')
    tableData.innerHTML = data.tastings[row]['blend']
    tableRow.appendChild(tableData)
    tableData = document.createElement('td')
    tableData.innerHTML = data.tastings[row]['rating']
    tableRow.appendChild(tableData)
    tableData = document.createElement('td')
    tableData.innerHTML = data.tastings[row]['favorite']
    tableRow.appendChild(tableData)
    tableData = document.createElement('td')
    tableData.innerHTML = data.tastings[row]['tasting_notes']
    tableRow.appendChild(tableData)
    tableData = document.createElement('td')
    tableData.innerHTML = data.tastings[row]['grams_in']
    tableRow.appendChild(tableData)
    tableData = document.createElement('td')
    tableData.innerHTML = data.tastings[row]['grams_out']
    tableRow.appendChild(tableData)
    tableData = document.createElement('td')
    tableData.innerHTML = data.tastings[row]['time']
    tableRow.appendChild(tableData)
    tableData = document.createElement('td')
    tableData.innerHTML = data.tastings[row]['temperature']
    tableRow.appendChild(tableData)
    tableData = document.createElement('td')
    tableData.innerHTML = data.tastings[row]['extraction_notes']
    tableRow.appendChild(tableData)
    table.appendChild(tableRow)
  }
  document.getElementById('myTastingsTable').appendChild(table)
  console.log('adding table', table)
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
  addCoffeeFailure,
  addCoffeeSuccess,
  addTastingSuccess,
  addTastingFailure,
  getMyCoffeesSuccess,
  getMyCoffeesFailure,
  generateCoffeeTableDiv,
  generateTastingsTable,
  getMyId
}
