const User = (function(){
  return class User {

  constructor({username, email}){
    this.username = username
    this.email = email
  }

  static renderUser(){
    UserApi.getUserInfo(3)
    .then(json => {
      console.log(json.username)
      username = json.username
      email = json.email
    })

  }

 }
})()
