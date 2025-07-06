import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @Input() expenseData?:any[];
  @Input() showDialog = false;
  @Output() closeDialog = new EventEmitter<void>();
  @Output() description = new EventEmitter<string>();
  @Output() amount = new EventEmitter<number>();
  descriptionValue?:string;
  amountValue?:number;

  emitDescription(){
    this.description.emit(this.descriptionValue);
  }

  emitAmount(){
    this.amount.emit(this.amountValue);
  }

  onClose(){
    this.closeDialog.emit();
    this.descriptionValue = '';
    this.amountValue = NaN;
  }

  onDescription(){
    this.emitDescription();
  }

  onAmount(){
    this.emitAmount();
  }

  onAdd(){
    if(this.descriptionValue?.trim() && this.amountValue){
      this.expenseData?.push({"expenseDescription":this.descriptionValue,"date":new Date,"amount":this.amountValue})
      this.descriptionValue = '';
      this.amountValue = NaN;
      this.closeDialog.emit();
    }

    else{
      alert('Enter the values');
      this.descriptionValue = '';
      this.amountValue = NaN;
    }
  }

}
