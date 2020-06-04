import { Component, OnInit } from '@angular/core';
import { Widget, WidgetsService } from 'app/shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})

export class WidgetsComponent implements OnInit {
    selectedWidget: Widget;
    // array of Widget (model) objects
    widgets: Array<Widget>;

    constructor(private widgetsService: WidgetsService) {}

    ngOnInit() {
        this.widgets = this.widgetsService.widgets;
        this.reset();
    }

    reset() {
        this.selectedWidget = { id: null, name: '', description: '' };
    }

    selectWidget(widget) {
        this.selectedWidget = widget;
    }

    deleteWidget(widget) {
      console.log('Deleting widget', widget);
    }

    saveWidget(widget) {
        console.log('Saving widget', widget);
        this.reset();
    }

    cancel() {
        this.reset();
    }
}