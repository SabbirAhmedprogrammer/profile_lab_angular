import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//I need to import this in order to use .navigate method
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { UserProfile } from '../interfaces/user-profile';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  //user is a variable made with type UserProfile
  user: UserProfile;
  //injecting service. Brought methods from the profile.service
  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  editProfile(form: NgForm): void {
    //the form would be the (editform) called in the edit.component.html this method is called there
    //with the parameter being the form reference id (to call the form)
    //then the following gives the new object with the new values pulled from the form
    this.user = {
      name: form.value.name,
      contact: form.value.contact,
      bio: form.value.bio
    };

    //try this.user set to the whole object without using newUser
    // this.user = newUser;
    //this.profileservice... 
    this.profileService.setUserProfile(this.user);
    //moves back to profile component
    this.router.navigate(["profile"])
  }



}
