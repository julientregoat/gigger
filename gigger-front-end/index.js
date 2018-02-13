document.getElementById('current-page').innerHTML = STARTPAGE;

document.getElementById('login-btn').addEventListener('click', function(event){
  event.preventDefault();
  let input = document.getElementById('username-input-login')
  let spanAlert = document.getElementById('alert')
  let startPage = document.getElementById('start-page')
  // let alertdiv = document.createElement('div')
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
      const current_user = new User(userJSON)
      console.log("else", current_user);
      startPage.innerHTML = ''
      startPage.append(current_user.renderFoundUser())
    }
  })
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
//make sure to put current_user here
//i hardcoded in 3 to make it work for now
  UserApi.fetchUser(3).then((userJSON) => {
    const newUser = new User(userJSON)
    userInfoDiv.append(newUser.renderAccount())
  })
})
