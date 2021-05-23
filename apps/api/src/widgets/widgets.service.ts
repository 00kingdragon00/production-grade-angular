import { Injectable } from '@nestjs/common';
import { Widget } from '@pga/api-interfaces';
import { v4 as uuidv4 } from 'uuid';
import { UpdateWidgetDto } from './dto/update-widget.dto';

@Injectable()
export class WidgetsService {
  widget: Widget[] = [
    { id: '1', title: 'Remote Mock Widget 01', description: 'Pending' },
    { id: '2', title: 'Remote Mock Widget 02', description: 'Pending' },
    { id: '3', title: 'Remote Mock Widget 03', description: 'Pending' },
  ];

  create(widget: Widget) {
    this.widget = [...this.widget, Object.assign({}, widget, { id: uuidv4() })];
    return this.widget;
  }

  findAll() {
    return this.widget;
  }

  findOne(id: string) {
    return this.widget.find((widget) => widget.id === id);
  }

  update(id: string, widget: Widget) {
    this.widget = this.widget.map((w) => (w.id === id ? widget : w));
    return this.widget;
  }

  remove(id: string) {
    this.widget = this.widget.filter((widget) => widget.id !== id);
    return this.widget;
  }
}
