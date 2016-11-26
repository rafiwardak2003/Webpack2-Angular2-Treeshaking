import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import 'zone.js';
import 'reflect-metadata';

// These two should be included in the bundle
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher.component';

// This component shouldn't be in the bundle because it isn't used
import { StudentComponent } from './student.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        TeacherComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ]
})

export class AppModule {}