import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

const materialProperty = [MatIconModule];

@NgModule({
  imports: [materialProperty],
  exports: [materialProperty],
})
export class MaterialModule {}
