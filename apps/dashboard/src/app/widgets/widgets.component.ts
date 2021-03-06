import { Component, OnInit } from '@angular/core';
import { Widget } from '@pga/api-interfaces';
import { WidgetsService } from '@pga/core-data';
import { Observable } from 'rxjs';

const mockWidgets: Widget[] = [
  { id: '1', title: 'Widget 01', description: 'Pending' },
  { id: '2', title: 'Widget 02', description: 'Pending' },
  { id: '3', title: 'Widget 03', description: 'Pending' },
];

const emptyWidget: Widget = {
  id: null,
  title: '',
  description: '',
};

@Component({
  selector: 'pga-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
})
export class WidgetsComponent implements OnInit {
  widgets: Observable<Widget[]>;
  selectedWidget: Widget;

  constructor(private widgetsService: WidgetsService) {}
  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadWidgets();
    this.selectWidget(null);
  }

  resetForm() {
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }

  loadWidgets() {
    this.widgets = this.widgetsService.all();
  }

  saveWidget(widget: Widget) {
    if (widget.id) {
      this.updateWidget(widget);
    } else {
      this.createWidget(widget);
    }
  }

  createWidget(widget: Widget) {
    this.widgetsService.create(widget).subscribe((result) => this.reset());
    this.resetForm();
  }

  updateWidget(widget: Widget) {
    this.widgetsService.update(widget).subscribe((result) => this.reset());
    this.resetForm();
  }

  deleteWidget(widget: Widget) {
    this.widgetsService.delete(widget).subscribe((result) => this.reset());
    this.resetForm();
  }

  private getRandomID() {
    return Math.random().toString(36).substring(7);
  }
}
