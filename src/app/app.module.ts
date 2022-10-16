// Package.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// Internal.
import { AppComponent } from './app.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { MaterialModule } from './shared/material.module';
import { TableEditorComponent } from './components/table-editor/table-editor.component';

import { FormsModule } from '@angular/forms';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { UserGuideComponent } from './components/user-guide/user-guide.component';
import { FixedwarningComponent } from './components/fixedwarning/fixedwarning.component';

// Code.
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
  ],
  declarations: [AppComponent, DynamicTableComponent, TableEditorComponent, DropdownMenuComponent, ToggleComponent, UserGuideComponent, FixedwarningComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
