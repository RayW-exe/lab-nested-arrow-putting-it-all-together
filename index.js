function createLoginTracker (userInfo){
  let attemptCount = 0
  return (passwordAttempt) =>{
    attemptCount++;
    if (passwordAttempt === userInfo.password ){
       if (attemptCount < 3){
        console.log("Login successful")
       }
       else{
        console.log("Attempt ${attemptCount}: Login failed")
       }
    }
    if (attemptCount > 3){
     console.log("Account locked due to too many failed login attempts") 
    }
  } 
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};