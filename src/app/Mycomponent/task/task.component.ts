import { Component, OnInit } from '@angular/core';
import{Task} from "../../Task";
import { Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { HttpClient,HttpClientModule  } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public tasks : Task[] = []
  searchedKeyword:string
  
  fetchbooks(): Observable <Task>{
    return this.http.get<Task>('https://task-c0559-default-rtdb.firebaseio.com/books.json');
  }

  constructor(private http: HttpClient, 
    private router: Router) { 
    
    this.fetchbooks().subscribe((data: Task) =>{
      const d=JSON.stringify(data)
      this.tasks=JSON.parse(d)

    })
      

  }
  
  ngOnInit(): void {
  }
  
}
