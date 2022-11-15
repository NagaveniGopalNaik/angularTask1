import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
const materialProperty = [
  MatIconModule,
  MatDialogModule];

@NgModule({
  imports: [materialProperty],
  exports: [materialProperty],
})
export class MaterialModule {}
