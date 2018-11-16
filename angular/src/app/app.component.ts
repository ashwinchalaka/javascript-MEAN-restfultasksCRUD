import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks CRUD';
  allTasks: any[] = [];
  newTask: any;
  editTask: any;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTasks();
    this.newTask = { title: "", description: "" }
    this.editTask = { id: "", title: "", description: "" }
  }
  
  getTasks() {
    let tempObservable = this._httpService.getTasksFromServer();
    tempObservable.subscribe(data => {
      if (data['message'] == true) {
        // console.log(data);
        this.allTasks = data['data'] as any[];
      }
    });
  }

  onCreateSubmit(): void {
    // console.log(this.newTask);
    let observable = this._httpService.addNewTask(this.newTask);
    observable.subscribe(data => {
      if (data['message'] == true) {
        this.getTasks();
      }
    });
    this.newTask = { title: "", description: "" }
  }
  
  onEditPressed(taskID: String): void {
    let observable = this._httpService.getOneTask(taskID);
    observable.subscribe(data => {
      if (data['message'] == true) {
        this.editTask['id'] = data['data'][0]['_id'];
        this.editTask['title'] = data['data'][0]['title'];
        this.editTask['description'] = data['data'][0]['description'];
      }
    });
  }
  
  onEditSubmit(): void {
    let observable = this._httpService.updateTask(this.editTask);
    observable.subscribe(data => {
      if (data['message'] == true) {
        this.getTasks();
      }
    });
    this.editTask = { id: "", title: "", description: "" }
  } 

  onDeletePressed(taskID: String): void {
    let observable = this._httpService.deleteTask(taskID);
    observable.subscribe(data => {
      console.log(data);
      if (data['message'] == true) {
        this.getTasks();
      }
    });
  }
}
