document.getElementById('current-page').innerHTML = STARTPAGE;

document.addEventListener('DOMContentloaded', function(){
})

//View gigs event listener

document.getElementById('view-gigs').addEventListener('click', function (){
  document.getElementById('current-page').innerHTML = VIEWGIGSPAGE;
})

document.getElementById('your-gigs').addEventListener('click', function (){
  document.getElementById('current-page').innerHTML = YOURGIGSPAGE;
})

document.getElementById('account').addEventListener('click', function (){
  document.getElementById('current-page').innerHTML = STARTPAGE;
})
