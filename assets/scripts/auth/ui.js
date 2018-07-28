'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  // $('#message').text('Signed up successfully')
  // $('#message').css('background-color', 'green')
  $('#sign-out').removeClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#signUpSuccess').modal({show: true})
  setTimeout(function () {
    $('#signUpSuccess').modal('hide')
  }, 2000)
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  // $('#message').text('Error on sign up')
  // $('#message').css('background-color', 'red')
  $('#signInFailure').modal({show: true})
  setTimeout(function () {
    $('#signUpFailure').modal({show: false})
  }, 2000)
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
  console.log('signInSuccess ran. Data is :', data)
  $('#signInSuccess').modal({show: true})
  setTimeout(function () {
    $('#signInSuccess').modal('hide')
  }, 2000)
  store.user = data.user
}

const signInFailure = function (error) {
  // $('#message').text('Error on sign in')
  // $('#message').css('background-color', 'red')
  $('#signInFailure').modal({show: true})
  setTimeout(function () {
    $('#signInFailure').modal('hide')
  }, 2000)
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
  setTimeout(function () {
    $('#signOutSuccess').modal('hide')
  }, 2000)
  // console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
  // $('#message').text('Error on sign out')
  // $('#message').css('background-color', 'red')
  $('#signOutFailure').modal({show: true})
  setTimeout(function () {
    $('#signOutFailure').modal('hide')
  }, 2000)
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  // $('#message').text('Changed password successfully')
  // $('#message').css('background-color', 'green')
  $('#changePasswordSuccess').modal({show: true})
  setTimeout(function () {
    $('#changePasswordSuccess').modal('hide')
  }, 2000)
  // console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  // $('#message').text('Error on change password')
  // $('#message').css('background-color', 'red')
  $('#changePasswordFailure').modal({show: true})
  setTimeout(function () {
    $('#changePasswordFailure').modal('hide')
  }, 2000)
  console.error('changePasswordFailure ran. Error is :', error)
}

const addCoffeeSuccess = function () {
  // $('#message').text('added coffee successfully')
  // $('#message').css('background-color', 'green')
  $('#addCoffeeSuccess').modal({show: true})
  setTimeout(function () {
    $('#addCoffeeSuccess').modal('hide')
  }, 2000)
  console.log('addCoffeeSuccess ran and nothing was returned!')
}

const addCoffeeFailure = function (error) {
  // $('#message').text('Error on add coffee')
  // $('#message').css('background-color', 'red')
  $('#addCoffeeFailure').modal({show: true})
  setTimeout(function () {
    $('#addCoffeeFailure').modal('hide')
  }, 2000)
  console.error('addCoffeeFailure ran. Error is :', error)
}
const addTastingSuccess = function () {
  // $('#message').text('added tasting successfully')
  // $('#message').css('background-color', 'green')
  $('#addTastingSuccess').modal({show: true})
  setTimeout(function () {
    $('#addTastingSuccess').modal('hide')
  }, 2000)
  console.log('addTastingSuccess ran and nothing was returned!')
}

const addTastingFailure = function (error) {
  // $('#message').text('Error on add tasting')
  // $('#message').css('background-color', 'red')
  $('#addTastingFailure').modal({show: true})
  setTimeout(function () {
    $('#addTastingFailure').modal('hide')
  }, 2000)
  console.error('addTastingFailure ran. Error is :', error)
}

const getMyCoffeesSuccess = function () {
  // $('#message').text('got coffees successfully')
  // $('#message').css('background-color', 'green')
  $('#getMyCoffeesSuccess').modal({show: true})
  setTimeout(function () {
    $('#getMyCoffeesSuccess').modal('hide')
  }, 2000)
  console.log('getMyCoffeesSuccess ran and nothing was returned!')
}
const getMyCoffeesFailure = function () {
  // $('#message').text('error on get coffees')
  // $('#message').css('background-color', 'green')
  $('#getMyCoffeesFailure').modal({show: true})
  setTimeout(function () {
    $('#getMyCoffeesFailure').modal('hide')
  }, 2000)
  console.log('getMyCoffeesFailure ran and nothing was returned!')
}

// $(document).on(modal({show: true})), function (event, modal) {
//   setTimeout(function () {
//     $.modal.close()
//   }, 2000)
// })

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

// const getCoffeesTable = document.getElementById('getMyCoffees')

const myCoffeesTable = function(data) {
  $('#getMyCoffees').addEventListener('click', function () {
    $('/api/onGetMyCoffees.data')
    $('#content').css('table')
    console.table(['roaster', 'blend', 'favorite', 'rating'])
  })
}

// let x
//
// for (x = 0; x < Coffee.coffees.length; i++) {
//   if (data.coffee[x].user.id === store.user.id) {
//     console.log('user confirmed')
//     $('#content').append(`
//       <table>
//           <tr>
//             <td>${string.coffee[x].roaster}</td>
//             <td>${data.coffee[x].blend}</td>
//             <td>${data.coffee[x].favorite}</td>
//             <td class="ratingData">${data.coffee[x].rating}</td>
//           </tr>
//       </table>
//     `)
//   }
// }

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
  getMyCoffeesFailure,
  myCoffeesTable
}
