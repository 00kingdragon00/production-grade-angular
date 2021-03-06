import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Widget } from '@pga/api-interfaces';
@Component({
  selector: 'pga-widgets-details',
  templateUrl: './widgets-details.component.html',
  styleUrls: ['./widgets-details.component.scss']
})
export class WidgetsDetailsComponent  {

  currentWidget: Widget;
  originalTitle = '';
  @Input() set widget(value: Widget) {
    if(value) this.originalTitle = value.title;
    this.currentWidget = {...value};
  };
  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
}
