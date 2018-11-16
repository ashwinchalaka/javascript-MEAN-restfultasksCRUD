import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){}
  getTasksFromServer(){
    return this._http.get('/tasks/');
  }
  addNewTask(newTask){
    return this._http.post('/create/', newTask)
  }
  getOneTask(taskID){
    return this._http.get('/' + taskID + '/');
  }
  updateTask(editTask){
    return this._http.put('/update/' + editTask['id'] + '/', editTask);
  }
  deleteTask(taskID){
    return this._http.delete('/remove/' + taskID + '/');
  }
}