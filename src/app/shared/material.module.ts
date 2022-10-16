// Package.
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// Code.
const proxiedModules = [MatButtonModule, MatCardModule];

@NgModule({
  imports: proxiedModules,
  exports: proxiedModules,
})
export class MaterialModule {}
