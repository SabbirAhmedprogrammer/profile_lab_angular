import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: "", redirectTo: "/profile", pathMatch: "full" },
  //these bottom two states which component is called with that route
  //call the class from the component
  { path: "profile", component: ProfileComponent },
  { path: "edit-profile", component: EditComponent },
  { path: "**", redirectTo: "/profile", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
