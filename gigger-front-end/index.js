document.getElementById('current-page').innerHTML = STARTPAGE;

document.addEventListener('DOMContentloaded', function(){
})


document.getElementById('view-gigs').addEventListener('click', function (){
  document.getElementById('current-page').innerHTML = VIEWGIGSPAGE;
  GigApi.fetchGigs()
})

document.getElementById('your-gigs').addEventListener('click', function (){
  document.getElementById('current-page').innerHTML = YOURGIGSPAGE;
})

document.getElementById('account').addEventListener('click', function (){
  //change this based on logged in or not
  document.getElementById('current-page').innerHTML = ACCOUNTPAGE;
})
