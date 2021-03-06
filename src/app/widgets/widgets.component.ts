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
        this.loadWidgetsFromService();
        this.reset();
    }

    loadWidgetsFromService() {
        this.widgetsService.loadWidgets()
        .subscribe(widgets => this.widgets = widgets);
    }

    reset() {
        this.selectedWidget = { id: null, name: '', description: '' };
    }

    selectWidget(widget) {
        this.selectedWidget = widget;
    }

    saveWidget(widget) {
        if(!widget.id) {
            this.createWidget(widget);
        } else {
            this.updateWidget(widget);
        }
    }

    createWidget(widget) {
        this.widgetsService.create(widget).subscribe(result => {
            this.loadWidgetsFromService();
            this.reset();
        })
    }

    updateWidget(widget) {
        this.widgetsService.update(widget).subscribe(result => {
            this.loadWidgetsFromService();
            this.reset();
        })
    }

    deleteWidget(widget) {
        this.widgetsService.delete(widget).subscribe(result => {
            this.loadWidgetsFromService();
            this.reset();
        })
    }

    cancel() {
        this.reset();
    }
}