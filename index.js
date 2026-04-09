function createLoginTracker (userInfo){
  let attemptCount = 0
  return (passwordAttempt) =>{
    attemptCount++;
    if (passwordAttempt === userInfo.password ){
       if (attemptCount < 3){
        console.log("Login successful")
       }
       else if(attemptCount > 3){
        console.log("Account locked due to too many failed login attempts") 
       }
    }
    else if (passwordAttempt !== userInfo.password){
      if (attemptCount < 3){
        console.log("Attempt ${attemptCount}: Login failed")
      }
      else{
        console.log("Account locked due to too many failed login attempts") 
      }
    }
  } 
}

const userInfo = {
  "username": "user1",
  "password": "password123"
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};