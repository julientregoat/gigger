document.getElementById('current-page').innerHTML = STARTPAGE;

let current_user = ''

function loginCallback(event){
  event.preventDefault();
  let input = document.getElementById('username-input-login')
  let spanAlert = document.getElementById('alert')
  let startPage = document.getElementById('start-page')
  UserApi.checkUser(input.value)
  .then(userJSON => {
    if (userJSON.message === "Invalid"){
      spanAlert.innerHTML =
      `
      <br>
      <div class="alert alert-danger" role="alert">
        Invalid Username!
      </div>
        `
    } else {
      current_user = new User(userJSON)
      let namePlaceholder = document.getElementById('currentuser-name')
      let userInfoSection = document.getElementById('user-info-section')

      namePlaceholder.innerHTML = current_user.username
      userInfoSection.className = 'justify-content-end'

      startPage.innerHTML = ''
      startPage.append(current_user.renderFoundUser())
    }
  })
}

function signUpCallback(event){
  event.preventDefault();
  let usernameField = document.getElementById('username-input-signup')
  let emailField = document.getElementById('email-input')
  let spanAlert = document.getElementById('alert')
  let startPage = document.getElementById('start-page')
  // make sure username is available
  // make sure email is valid
  // raise these specific errors if they are not
  UserApi.makeUser(usernameField.value, emailField.value)
  .then(userJSON => {
    if (userJSON.errors){
      spanAlert.innerHTML =
      `
      <br>
      <div id='alert-here' class="alert alert-danger" role="alert">
      </div>
        `
  let alert = document.getElementById('alert-here')
  userJSON.errors.forEach(error => {
    let textNode = document.createElement('p')
    textNode.innerHTML = error
    alert.append(textNode)
  })} else {
      current_user = new User(userJSON)
      let namePlaceholder = document.getElementById('currentuser-name')
      namePlaceholder.innerHTML = current_user.username
      startPage.innerHTML = ''
      startPage.append(current_user.renderFoundUser())
  }})

}

document.getElementById('login-form').addEventListener('submit', loginCallback)
document.getElementById('sign-up-form').addEventListener('submit', signUpCallback)

// REMOVED DOM CONTENT LOADED FOR NOW B/C WE DON'T KNOW IF WE NEED IT
// document.addEventListener('DOMContentloaded', function(){
// })

function logout(){
  current_user = ''
  document.getElementById('user-info-section').className = "justify-content-end invisible"
  alert('logged out')

  document.getElementById('current-page').innerHTML = STARTPAGE;
  document.getElementById('login-form').addEventListener('submit', loginCallback)
  document.getElementById('sign-up-form').addEventListener('submit', signUpCallback)
}

document.getElementById('view-gigs').addEventListener('click', function (){
  document.getElementById('current-page').innerHTML = VIEWGIGSPAGE;
  let current_page = 0
  document.getElementById('current-page-count').textContent = `Current Page: ${current_page + 1}`
  const gigsList = document.getElementById('gigs-list-group')

  gigsList.innerHTML = ''
  GigApi.fetchGigs().then((gigs) => {
    gigs.forEach((gig) => {
      const newGig = new Gig(gig)
      gigsList.prepend(newGig.renderPreview())
    })
  })

  document.getElementById('gigs-search').addEventListener('submit', function(e){
    e.preventDefault()
    let query = document.getElementById('gigs-search-input').value
    fetch(`http://localhost:3000/gigs?search=${query}`)
    .then(res => res.json()).then(gigs => {
      document.getElementById('gigs-list-group').innerHTML = ''
      gigs.forEach((gig) => {
        const newGig = new Gig(gig)
        gigsList.prepend(newGig.renderPreview())
      })
    })
  })

  document.getElementById('next-page-button').addEventListener('click', function(e){
    current_page += 1
    document.getElementById('current-page-count').textContent = `Current Page: ${current_page + 1}`
    GigApi.fetchGigsPage(current_page).then(gigs => {
      gigs.forEach((gig) => {
        const newGig = new Gig(gig)
        gigsList.prepend(newGig.renderPreview())
      })
    })
  })

  document.getElementById('previous-page-button').addEventListener('click', function(e){
    if (current_page > 0){
      current_page -= 1
    } else {
      current_page = 0
    }
    
    document.getElementById('current-page-count').textContent = `Current Page: ${current_page + 1}`
    GigApi.fetchGigsPage(current_page).then(gigs => {
      gigs.forEach((gig) => {
        const newGig = new Gig(gig)
        gigsList.prepend(newGig.renderPreview())
      })
    })
  })
})

document.getElementById('your-gigs').addEventListener('click', function (){
  let currentPage = document.getElementById('current-page')
  if (current_user != ''){
    currentPage.innerHTML = YOURGIGSPAGE;
    const gigsList = document.getElementById('gigs-list-group')
    gigsList.innerHTML = ''
    GigApi.fetchYourGigs().then((gigs) => {
      gigs.forEach((gig) => {
        const newGig = new Gig(gig)
        gigsList.prepend(newGig.renderPreview())
      })
    })
  } else {
    alert("You can't do that while not logged in.")
    document.getElementById('current-page').innerHTML = STARTPAGE;
    document.getElementById('login-form').addEventListener('submit', loginCallback)
    document.getElementById('sign-up-form').addEventListener('submit', signUpCallback)
  }
})


document.getElementById('account').addEventListener('click', function (){
  if (current_user != ''){
    document.getElementById('current-page').innerHTML = ACCOUNTPAGE;
    const userInfoDiv = document.getElementById('user-info')
    // console.log("current", current_user);
    let editBTN = document.getElementById('edit-account-btn')
    editBTN.addEventListener('click', current_user.editAccountPage.bind(current_user))
    UserApi.fetchUser(current_user.id).then((userJSON) => {
      const newUser = new User(userJSON)
      userInfoDiv.append(newUser.renderAccount())
    })
  } else {
    alert('Log in to access account information.')
    document.getElementById('current-page').innerHTML = STARTPAGE;
    document.getElementById('login-form').addEventListener('submit', loginCallback)
    document.getElementById('sign-up-form').addEventListener('submit', signUpCallback)
  }


})
