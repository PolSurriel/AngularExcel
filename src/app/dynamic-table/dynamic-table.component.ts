import { Component } from '@angular/core';

import { DynamicTableControllerService } from '../services/dynamic-table-controller.service';

@Component({
  selector: 'dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
})
export class DynamicTableComponent {

  fullFillWidth : boolean = false;

  constructor(
    private dynamicTableControllerService : DynamicTableControllerService
  ){

  }

  onToggleFillFullWidth(active : boolean) : void{
    this.fullFillWidth = active;
  }

  onSaveAsCSV() : void{
    this.dynamicTableControllerService.saveAsCSV();
  }

  onFileSelected(event: Event) {
    console.log(event);
    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = () => {
        console.log(reader.result);
        this.dynamicTableControllerService.loadFromCSV(reader.result as string);
      };
      reader.onerror = () => {
        console.error(reader.error);
      };

      const target = event.target as HTMLInputElement | undefined;
      if (!target || !target.files) {
        return;
      }

      const file = target.files[0];
      reader.readAsText(file, 'utf8');
      
    }
  }
}
