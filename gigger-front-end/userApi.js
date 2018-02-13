const UserApi = (function(){
  return class UserApi {

  static getUserInfo(user_id){
    return fetch(`http://localhost:3000/users/${user_id}`)
    .then(res => res.json())
  }

  }
})()
