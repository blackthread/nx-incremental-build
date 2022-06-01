import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SharedNgUiModule } from '@magic-flight/shared-ng/ui';

@NgModule({
  imports: [CommonModule,SharedNgUiModule],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class BookingFeatureSearchModule {}
