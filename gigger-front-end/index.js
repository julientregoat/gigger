document.getElementById('current-page').innerHTML = STARTPAGE;

document.addEventListener('DOMContentloaded', function(){
})


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

document.getElementById('your-gigs').addEventListener('click', function (){
  document.getElementById('current-page').innerHTML = YOURGIGSPAGE;
})

document.getElementById('account').addEventListener('click', function (){
  document.getElementById('current-page').innerHTML = ACCOUNTPAGE;
  const userInfoDiv = document.getElementById('user-info')
  //make sure to put current_user here
  UserApi.fetchUser(3).then((userJSON) => {
    const newUser = new User(userJSON)
    userInfoDiv.append(newUser.render())
  })
})
