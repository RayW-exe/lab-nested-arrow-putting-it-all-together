function createLoginTracker (userInfo){
  let attemptCount = 0
  return (passwordAttempt) =>{
    attemptCount = attemptCount + 1
    if (passwordAttempt === userInfo.password ){
       if (attemptCount < 3){
        console.log("Login successful")
       }
       else{
        console.log("Account locked due to too many failed login attempts")
       }
    }
    else{
      if (attemptCount = 1){
        console.log("Attempt 1: Login failed")
      }
      else if (attemptCount = 2){
        console.log("Attempt 2: Login failed")
      }
      else if (attemptCount = 3){
        console.log("Attempt 3: Login failed")
      }
      else if (attemptCount > 3){
        console.log("Account locked due to too many failed login attempts")
      }
    }
  } 
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};