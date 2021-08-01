import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Todo {
  text: string;
  isDone: boolean;  
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.todos$ = this.firestore.collection<Todo>('todos').valueChanges();
  }

}
