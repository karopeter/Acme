import { NgModule } from '@angular/core';
import { Inject } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceDetailsComponent } from './space-rocket/space-details.component';
import { SpaceDetailGuard } from './space-rocket/space-guard.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-list/product-detail.component';
import { ProductDetailGuard } from './product-list/product-guard.service';
import { SpaceRocketComponent } from './space-rocket/space-rocket.component';


const routes: Routes = [
  {
   path: 'products',
   component: ProductListComponent
  },
  {
   path: 'product/:productId',
   canActivate: [() => Inject(ProductDetailGuard)],
   component: ProductDetailComponent
  },
  {
   path: 'rocket',
   component: SpaceRocketComponent
  },
  {
    path: 'rocket/:rocketId',
    canActivate: [() => Inject(SpaceDetailGuard)],
    component: SpaceDetailsComponent
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '***', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
