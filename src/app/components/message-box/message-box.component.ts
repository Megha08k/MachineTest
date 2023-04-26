import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MessageBox } from 'src/app/model/messageBox';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) readonly data: MessageBox) { }

  ngOnInit(): void {
console.log(this.data);
  }

}
