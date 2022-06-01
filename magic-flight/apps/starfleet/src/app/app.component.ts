import { Component } from '@angular/core';

@Component({
  selector: 'magic-flight-root',
  template: `<magic-flight-nx-welcome></magic-flight-nx-welcome>

  <magic-flight-search></magic-flight-search>`
})
export class AppComponent {
  title = 'starfleet';
}
