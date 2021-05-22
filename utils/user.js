class User{
  constructor(firstName,lastName,userName,email){
    this.firstName=firstName,
    this.lastName=lastName,
    this.userName=userName,
    this.email=email,
    this.isPassport=true,
    this.password=undefined
    
  }
}

module.exports=User;