import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Widget } from 'app/shared';

@Component({
  selector: 'app-widgets-detail',
  templateUrl: './widgets-detail.component.html',
  styleUrls: ['./widgets-detail.component.css']
})
export class WidgetsDetailComponent {
  originalName;
  selectedWidget: Widget;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set widget(value: Widget) {
    if (value) {
      this.originalName = value.name;
    }
    this.selectedWidget = Object.assign({}, value);
  }
}
