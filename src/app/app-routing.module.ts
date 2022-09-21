import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const router: Routes = [{
  path:'',
  redirectTo:'fruits/home',
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
