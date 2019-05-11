
import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, 
        MatIconModule, MatBadgeModule, 
        MatProgressSpinnerModule, MatMenuModule } from '@angular/material';

const MaterialComponents = [ 
  MatButtonModule, MatButtonToggleModule,
  MatIconModule, MatBadgeModule, 
  MatProgressSpinnerModule, MatMenuModule ];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
