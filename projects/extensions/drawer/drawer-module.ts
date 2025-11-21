import { DialogModule } from '@angular/cdk/dialog';
import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MtxDrawer } from './drawer';
import { MtxDrawerContainer } from './drawer-container';

@NgModule({
  imports: [DialogModule, PortalModule, MatOptionModule, MtxDrawerContainer],
  exports: [MtxDrawerContainer, MatOptionModule],
  providers: [MtxDrawer],
})
export class MtxDrawerModule {}
