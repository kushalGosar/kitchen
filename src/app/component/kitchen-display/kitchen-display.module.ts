import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PredictionComponent } from './prediction/prediction.component';
import { QuantityComponent } from './quantity/quantity.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent
}, {
  path: 'prediction',
  component: PredictionComponent
}, {
  path: 'quantity',
  component: QuantityComponent
}

]

@NgModule({
  declarations: [DashboardComponent, PredictionComponent, QuantityComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class KitchenDisplayModule { }
