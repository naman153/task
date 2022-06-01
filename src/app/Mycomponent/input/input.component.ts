import { ThisReceiver } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { TaskComponent } from '../task/task.component';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {

  fetchbooks(): Observable <Task>{
    return this.http.get<Task>('https://task-c0559-default-rtdb.firebaseio.com/books.json');
  }
  public tasks:Task[]=[]
  constructor(
    private http: HttpClient, 
    private router: Router,
    private app: AppComponent) {

      this.fetchbooks().subscribe((data: Task) =>{
        const d=JSON.stringify(data)
        this.tasks=JSON.parse(d)
    
      })
    }

  ngOnInit(): void {
  }
  onCreate(){
    
  }
  onCreateBook(postData:{sno: string; title:string; author:string; price:string}){
    this.tasks.push(postData)
    this.http.put<Task>('https://task-c0559-default-rtdb.firebaseio.com/books.json', this.tasks)
    .subscribe(responseData => {
      console.log(responseData);
    });
    
  }

}
