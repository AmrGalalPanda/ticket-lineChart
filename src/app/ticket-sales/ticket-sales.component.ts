import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-ticket-sales',
  templateUrl: './ticket-sales.component.html',
  styleUrls: ['./ticket-sales.component.scss']
})
export class TicketSalesComponent {
  
  copyInputMessage(inputElement:any) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
  ngOnInit(): void {
    $("#copyButton, #copyTarget").on("click", () => {
      this.copyToClipboard(document.getElementById("copyTarget") as HTMLInputElement);
    });
  }

  copyToClipboard(elem: HTMLInputElement): boolean {
    const target = elem;

    // select the content
    const currentFocus = document.activeElement as HTMLElement;

    target.focus();
    target.setSelectionRange(0, target.value.length);

    // copy the selection
    let succeed: boolean;

    try {
      succeed = document.execCommand("copy");
    } catch (e) {
      console.warn(e);

      succeed = false;
    }

    // Restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
      currentFocus.focus();
    }

    if (succeed) {
      $(".copied").animate({ top: -25, opacity: 0 }, 700, function () {
        $(this).css({ top: 0, opacity: 1 });
      });
    }

    return succeed;
  }

}
