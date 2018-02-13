document.getElementById('view-gigs').addEventListener('click', function (){
  document.getElementById('start-page').className="container invisible";
  document.getElementById('your-gigs-page').className="container invisible";
  document.getElementById('all-gigs-page').className="container"
  document.getElementById('account-page').className="container invisible"
})

document.getElementById('your-gigs').addEventListener('click', function (){
  document.getElementById('start-page').className="container invisible";
  document.getElementById('your-gigs-page').className="container";
  document.getElementById('all-gigs-page').className="container invisible"
  document.getElementById('account-page').className="container invisible"
})

document.getElementById('account').addEventListener('click', function (){
  document.getElementById('start-page').className="container invisible";
  document.getElementById('your-gigs-page').className="container invisible";
  document.getElementById('all-gigs-page').className="container invisible"
  document.getElementById('account-page').className="container"
})
