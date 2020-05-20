import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //this is where the new property is made. user is PERSON. It started as user in the service
  //and here I am declaring it as person 
  //created a new property of person, with type userprofile
  person: UserProfile;
  //injected everything from profile.service.ts
  //profileservice is what is being injected, service can be any name
  //getuserprofile and setuserprofile (the methods) as well as the object, comes in with the inject
  //I must set the data to a new variable to house it
  //i only have access to the methods, which THEN calls the data. must call the method,
  //the method retrieves the data, and puts it into the person property 
  //service is basically a new property with type ProfileService , just like line 14
  //inject (private anyName : classofService)
  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    //this.service, the SERVICE came from the private that I injected
    //so once I call that injected property, I can call the methods with that (from the service)
    //then that method, the getUserProfile, lets me access the data in services
    this.person = this.service.getUserProfile()
  }

}
