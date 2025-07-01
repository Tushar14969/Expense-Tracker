import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent {
  now:Date = new Date();

  expenses:string[] = ['item 1','item 2','item 3'];
}
