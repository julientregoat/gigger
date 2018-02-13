const User = (function(){
  return class User {

  constructor({username, email}){
    this.username = username
    this.email = email
  }

  renderFoundUser(){
    let renderUser = document.createElement('div')
    renderUser.innerHTML =
    `
    <div id="welcome-page" class="container-fluid">
      <div id="welcome-page-div" class="list-group col-10">
        <div id="show-account-content" class="list-group-item">
        <div class="row justify-content-between">
          <h4 class="col-4" id="account-name">Welcome ${this.username}</h1>
        </div>
      </div>
    </div>
    </div>
      `
    return renderUser
  }

  renderAccount(){
    let div = document.createElement('div')
    let name = document.createElement('p')
    let email = document.createElement('p')
    name.innerText = "Username:  " + this.username
    email.innerText = "Email:  " + this.email
    div.append(name)
    div.append(email)
    return div
    }

 }
})()
