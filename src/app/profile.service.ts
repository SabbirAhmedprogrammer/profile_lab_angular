import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
//this is a class which is why to refer to it I must say this.property
// this is where a class is created
export class ProfileService {

  user: UserProfile = {
    name: "Bob",
    contact: "bobbington@gmail.com",
    bio: "Just a bob on a log"
  }
  constructor() { }

  //methods 
  //getter
  getUserProfile(): UserProfile {
    return this.user
  };
  //setter
  setUserProfile(user: UserProfile): void {
    //right side is the parameter user. left side is the property (from the class)
    //this profileservice's user. this refers to whichever class instance you're in
    //changes this service user to be equal to whatever the user is from where you call this method in a component
    this.user = user
  }
}
