
import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, 
        MatIconModule, MatBadgeModule, 
        MatProgressSpinnerModule, MatMenuModule,
        MatListModule, MatDividerModule, 
        MatGridListModule, MatExpansionModule, 
        MatCardModule, MatTabsModule,
        MatStepperModule } from '@angular/material';

const MaterialComponents = [ 
  MatButtonModule, MatButtonToggleModule,
  MatIconModule, MatBadgeModule, 
  MatProgressSpinnerModule, MatMenuModule, 
  MatListModule, MatDividerModule,
  MatGridListModule, MatExpansionModule,
  MatCardModule, MatTabsModule,
  MatStepperModule ];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
