import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [DatePipe, CommonModule, DialogComponent],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent {
  now:Date = new Date();
  show:boolean = false;

openDialog(){
  this.show = true;
}

closeDialog(){
  this.show = false;
}

  expenses:string[] = ['item 1','item 2','item 3'];
}
