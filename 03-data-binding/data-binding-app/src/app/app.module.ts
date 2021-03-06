import { StringInterpolationComponentComponent } from './string-interpolation-component/string-interpolation-component.component';
import { PropertyBindingComponentComponent } from './property-binding-component/property-binding-component.component';
import { EventBindingComponentComponent } from './event-binding-component/event-binding-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponentComponent,
    EventBindingComponentComponent,
    PropertyBindingComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDividerModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
