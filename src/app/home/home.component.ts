import { Component } from '@angular/core';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@Component({
  selector: 'ng18-home',
  standalone: true,
  imports: [
    NgxGraphModule,
    NgxChartsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  nodes = [
    { id: 'Created', label: 'Created' },
    { id: 'Prototyped', label: 'Prototyped' },
    { id: 'Published', label: 'Published' },
    { id: 'Block', label: 'Block' },
    { id: 'Deprecated', label: 'Deprecated' },
    { id: 'Retired', label: 'Retired' }
  ];
  
  links = [
    { source: 'Created', target: 'Prototyped', label: '' },
    { source: 'Created', target: 'Published', label: '' },
    { source: 'Prototyped', target: 'Published', label: '' },
    { source: 'Published', target: 'Block', label: '' },
    { source: 'Block', target: 'Deprecated', label: '' },
    { source: 'Deprecated', target: 'Retired', label: '' }
  ];
  
}
