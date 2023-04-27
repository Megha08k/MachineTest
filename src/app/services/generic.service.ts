import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageBox } from '../model/messageBox';
import { MessageBoxComponent } from '../components/message-box/message-box.component';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(private dialog : MatDialog) { }


  public openMessage(data:MessageBox){
    this.dialog.open(MessageBoxComponent, {
      data: data,
      width: '600px',
    });
  }
}
