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
  $('#sign-up')[0].reset()
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
  $('#sign-up')[0].reset()
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
  console.log(store.user.id)
  $('#sign-in')[0].reset()
  // $('#myId').html(`<p>${store.user.id}</p>`)
}

const signInFailure = function (error) {
  $('#signInFailure').modal({
    show: true
  })
  setTimeout(function () {
    $('#signInFailure').modal('hide')
  }, 2000)
  $('#sign-in')[0].reset()
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
  $('#sign-out')[0].reset()
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
  $('#sign-out')[0].reset()
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#changePasswordSuccess').modal({
    show: true
  })
  setTimeout(function () {
    $('#changePasswordSuccess').modal('hide')
  }, 2000)
  $('#change-password')[0].reset()
  // console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('#changePasswordFailure').modal({
    show: true
  })
  setTimeout(function () {
    $('#changePasswordFailure').modal('hide')
  }, 2000)
  $('#change-password')[0].reset()
  console.error('changePasswordFailure ran. Error is :', error)
}

// const addCoffeeSuccess = function () {
//   $('#addCoffeeSuccess').modal({
//     show: true
//   })
//   setTimeout(function () {
//     $('#addCoffeeSuccess').modal('hide')
//   }, 2000)
//   $('#coffee')[0].reset()
//   console.log('addCoffeeSuccess ran and nothing was returned!')
// }
//
// const addCoffeeFailure = function (error) {
//   $('#addCoffeeFailure').modal({
//     show: true
//   })
//   setTimeout(function () {
//     $('#addCoffeeFailure').modal('hide')
//   }, 2000)
//   console.error('addCoffeeFailure ran. Error is :', error)
// }

const addTastingSuccess = function () {
  $('#addTastingSuccess').modal({
    show: true
  })
  setTimeout(function () {
    $('#addTastingSuccess').modal('hide')
  }, 2000)
  $('#tasting')[0].reset()
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

const getAllCoffeesSuccess = function (data) {
  console.log('getAllCoffeesSuccess ran and the data is ', data)
  console.log('In getAllCoffeeSuccess and data.coffees is ', data.coffees)
  generateCoffeeTableDiv(data)
}

const getAllTastingsSuccess = function (data) {
  $('#getAllTastingsSuccess').modal({
    show: true
  })
  setTimeout(function () {
    $('#getAllTastingsSuccess').modal('hide')
  }, 2000)
  console.log('getAllTastingsSuccess ran and the data is ', data)
  console.log('In getAllTastingsSuccess and data.tastings is ', data.coffees)
  generateAllTastingsTable(data)
}

// const generateOneTastingByIdTable = function (data) {
//   const tastingData = $('#data.tasting')
//   console.log('in ui generate one tasting by id and the data is ', tastingData)
//   document.getElementById('singleTastingTable').append(tastingData)
// }

const generateOneTastingByIdTable = function (data) {
  const table = document.createElement('table')
  let tableRow = document.createElement('tr')
  let tableData
  const fields = ['roaster', 'blend', 'rating', 'fave', 'notes', 'grams_in', 'grams_out', 'time', 'temp', 'extraction_notes']
  for (let i = 0; i < fields.length; i++) {
    tableData = document.createElement('th')
    tableData.innerHTML = fields[i]
    tableRow.appendChild(tableData)
  }
  table.appendChild(tableRow)
  tableRow = document.createElement('tr')
  for (let i = 0; i < fields.length; i++) {
    tableData = document.createElement('td')
    tableData.innerHTML = data[fields[i]]
    tableRow.appendChild(tableData)
  }
  table.appendChild(tableRow)

  document.getElementById('singleTastingTable').appendChild(table)
  console.log('adding one tastings by id table', table)
}

const getOneTastingByIdSuccess = function (data) {
  console.log('in getOneTastingByIdSuccess')
  generateOneTastingByIdTable(data)
  $('#singleTastingTable').removeClass('hidden')
}

// const generateSingleTastingData = function (data) {
//   console.log(`at generateTastingData data is ${data}`)
//   console.log(`data.tasting is ${data.tasting}`)
//   console.log(`data json is ${JSON.stringify(data)}`)
//   let dataFormat = data.tasting
//   // dataFormat = dataFormat.toString()
//   dataFormat = JSON.stringify(dataFormat)
//   document.getElementById('singleTastingTable').append(dataFormat)
//   // data.tasting.forEach(tasting => {
//   //   const tastingData = document.createElement('data')
//   //   document.getElementById('singleTastingTable').append(tastingData)
//   //   console.log('adding tasting', tastingData)
//   // }
// }

let i
const acc = document.getElementsByClassName('accordion')

for (i = 0; i < acc.length; i++) {
  console.log('counter: ', i)
  acc[i].addEventListener('click', function () {
    $('table').empty()
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

const generateAllTastingsTable = function (data) {
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
  tableData.innerHTML = 'fave'
  tableRow.appendChild(tableData)
  tableData = document.createElement('th')
  tableData.innerHTML = 'notes'
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
  tableData.innerHTML = 'temp'
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
  document.getElementById('allTastingsTable').appendChild(table)
  console.log('adding all tastings table', table)
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
  // addCoffeeFailure,
  // addCoffeeSuccess,
  addTastingSuccess,
  addTastingFailure,
  getAllCoffeesSuccess,
  generateCoffeeTableDiv,
  generateAllTastingsTable,
  getAllTastingsSuccess,
  generateOneTastingByIdTable,
  getOneTastingByIdSuccess
}
