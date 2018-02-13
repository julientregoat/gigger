const UserApi = (function(){
  return class UserApi {

  static getUserInfo(){
    return fetch(`http://localhost:3000/users/3`)
    .then(res => res.json())
  }

  }
})()
