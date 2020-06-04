import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Widget, WidgetsService } from 'app/shared';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.css']
})

export class WidgetsListComponent {
  @Input() widgets: Array<Widget>;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

}
