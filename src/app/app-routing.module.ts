import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './Mycomponent/input/input.component';
import { MainComponent } from './Mycomponent/main/main.component';
import { TaskComponent } from './Mycomponent/task/task.component';

const routes: Routes = [
  {path:'', component:TaskComponent},
  {path:'main', component:MainComponent},
  {path:'add', component:InputComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
