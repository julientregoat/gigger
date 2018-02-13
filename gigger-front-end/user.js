const User = (function(){
  return class User {

  constructor({username, email}){
    this.username = username
    this.email = email
  }

  render(){
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
