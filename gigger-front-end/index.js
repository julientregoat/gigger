document.getElementById('current-page').innerHTML = STARTPAGE;

let current_user = ''

document.getElementById('login-form').addEventListener('submit', function(event){
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
      namePlaceholder.innerHTML = current_user.username
      startPage.innerHTML = ''
      startPage.append(current_user.renderFoundUser())
    }
  })
})

document.getElementById('sign-up-form').addEventListener('submit', function(event){
  event.preventDefault();
  let usernameField = document.getElementById('username-input-signup')
  let emailField = document.getElementById('email-input')
  let spanAlert = document.getElementById('alert')
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
  })
  // alert.innerHTMl
    }else{
      console.log("byeee")
  }})

})

// REMOVED DOM CONTENT LOADED FOR NOW B/C WE DON'T KNOW IF WE NEED IT
// document.addEventListener('DOMContentloaded', function(){
// })

document.getElementById('view-gigs').addEventListener('click', function (){
  document.getElementById('current-page').innerHTML = VIEWGIGSPAGE;
  const gigsList = document.getElementById('gigs-list-group')
  gigsList.innerHTML = ''
  GigApi.fetchGigs().then((gigs) => {
    gigs.forEach((gig) => {
      const newGig = new Gig(gig)
      gigsList.append(newGig.render())
    })
  })
})

///// have to make a render for your gigs
document.getElementById('your-gigs').addEventListener('click', function (){
  document.getElementById('current-page').innerHTML = YOURGIGSPAGE;
})

document.getElementById('account').addEventListener('click', function (){
  document.getElementById('current-page').innerHTML = ACCOUNTPAGE;
  const userInfoDiv = document.getElementById('user-info')
  console.log("current", current_user);
  UserApi.fetchUser(current_user.id).then((userJSON) => {
    const newUser = new User(userJSON)
    userInfoDiv.append(newUser.renderAccount())
  })
})
