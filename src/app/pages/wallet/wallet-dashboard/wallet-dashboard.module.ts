import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { WalletDashboardPage } from './wallet-dashboard';

import { TranslateModule } from '@ngx-translate/core';

import { PipesModule } from '@/pipes/pipes.module';
import { PinCodeComponentModule } from '@/components/pin-code/pin-code.module';
import { ConfirmTransactionComponentModule } from '@/components/confirm-transaction/confirm-transaction.module';

import { DirectivesModule } from '@/directives/directives.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    WalletDashboardPage,
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ paht: '/wallet/dashboard', component: WalletDashboardPage }]),
    TranslateModule,
    PipesModule,
    PinCodeComponentModule,
    ConfirmTransactionComponentModule,
    DirectivesModule,
  ],
})
export class WalletDashboardPageModule {}
