import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ProductFilterPipe } from './product-list/product-filter-pipe';
import { SpaceFilterPipe } from './space-rocket/space-filter-pipe';
import { StarComponent } from './star/star.component';
import { ProductDetailComponent } from './product-list/product-detail.component';
import { HeaderComponent } from './header/header.component';
import { SpaceDetailGuard } from './space-rocket/space-guard.service';
import { ProductDetailGuard } from './product-list/product-guard.service';
import { SpaceRocketComponent } from './space-rocket/space-rocket.component';
import { SpaceDetailsComponent } from './space-rocket/space-details.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { CounterComponent } from './viewchild/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    SpaceFilterPipe,
    ProductDetailComponent,
    HeaderComponent,
    SpaceRocketComponent,
    SpaceDetailsComponent,
    ViewchildComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [ProductDetailGuard, SpaceDetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
