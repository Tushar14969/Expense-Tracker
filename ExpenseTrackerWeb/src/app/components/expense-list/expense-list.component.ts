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
  expenseDescription?:string;
  date?:Date;
  amount?:number;

openDialog(){
  this.show = true;
}

closeDialog(){
  this.show = false;
}

  expenses:any[] = [
    {expenseDescription:'desc1', date:new Date, amount:12},
    {expenseDescription:'desc2', date:new Date, amount:120},
    {expenseDescription:'desc3', date:new Date, amount:125},
    {expenseDescription:'desc4', date:new Date, amount:1223},
    {expenseDescription:'desc5', date:new Date, amount:1278},
  ]
}
