import { NgModule } from '@angular/core';
import { BooleanGridFilterComponent } from './boolean-grid-filter/boolean-grid-filter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BooleanGridFilterComponent],
  imports: [
    FormsModule
  ],
  exports: [BooleanGridFilterComponent]
})
export class BooleanGridFilterModule { }
