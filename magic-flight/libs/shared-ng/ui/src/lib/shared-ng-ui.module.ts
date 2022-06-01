import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ComponentAComponent, ComponentBComponent],
  exports:[ComponentAComponent,ComponentBComponent]
})
export class SharedNgUiModule {}
