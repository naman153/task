import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { Observable } from 'rxjs';
import { HttpClient,HttpClientModule  } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public tasks : Task[] = []
  
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
  delete_book(sno:string){
    console.log(sno)
    this.tasks.forEach( (item, index) => {
      if(item.title === sno) this.tasks.splice(index,1);
    });
    this.http.put<Task>('https://task-c0559-default-rtdb.firebaseio.com/books.json', this.tasks)
    .subscribe(responseData => {
      console.log(responseData);
    });
  }

  ngOnInit(): void {

    
  }

}
