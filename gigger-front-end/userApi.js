const UserApi = (function(){
  return class UserApi {

  static checkUser(username){
    return fetch('http://localhost:3000/check_user', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
        },
      body: JSON.stringify({
        username: username
      })
    })
    .then(res => res.json())
  }

  static fetchUser(user_id){
    return fetch(`http://localhost:3000/users/${user_id}`)
    .then(res => res.json())
  }

  }
})()
