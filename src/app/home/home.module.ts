import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material';

import { HomeComponent } from './home.component';

import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
  ],
  imports: [
    MatButtonModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
  ],
  exports: [ HomeComponent ],
})

export class HomeModule {}
