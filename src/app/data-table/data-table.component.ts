import { Component } from '@angular/core';
 declare var $: any;
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  fullText = "سينما مصر , مول العرب , برج الأطنان , سرايا القبة المتفرعه من اي مكان";
  truncatedText:string ="";

  ngOnInit(): void {
    this.truncateText();
    $(document).ready(() => {
      
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  truncateText() {
    const words = this.fullText.split(' ');
    if (words.length > 4) {
      this.truncatedText = words.slice(0, 7).join(' ') + '...';
    } else {
      this.truncatedText = this.fullText;
   
    }
  
  }
  
}
