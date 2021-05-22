import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Widget } from '@pga/api-interfaces';
import { Observable } from 'rxjs';
@Component({
  selector: 'pga-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.scss'],
})
export class WidgetsListComponent {
  @Input() widgets: Observable<Widget[]>;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
