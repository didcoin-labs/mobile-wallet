import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Platform, NavController, AlertController, ModalController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { TranslateService } from '@ngx-translate/core';

import { SettingsDataProvider } from '@/services/settings-data/settings-data';
import { PinCodeComponent } from '@/components/pin-code/pin-code';

import * as constants from '@/app/app.constants';
import { PinCodeModal } from '@/app/modals/pin-code/pin-code';
import { CustomNetworkCreateModal } from '@/app/modals/custom-network-create/custom-network-create';

const packageJson = require('@/root/package.json');

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  styleUrls: ['settings.scss'],
  providers: [InAppBrowser],
})
export class SettingsPage implements OnInit, OnDestroy {
  @ViewChild('pinCode', { read: PinCodeComponent, static: true }) pinCode: PinCodeComponent;

  public objectKeys = Object.keys;

  public availableOptions;
  public currentSettings;
  public onEnterPinCode;
  public appVersion: number = packageJson.version;

  private unsubscriber$: Subject<void> = new Subject<void>();

  constructor(
    public platform: Platform,
    private navCtrl: NavController,
    private settingsDataProvider: SettingsDataProvider,
    private alertCtrl: AlertController,
    private translateService: TranslateService,
    private modalCtrl: ModalController,
    private inAppBrowser: InAppBrowser
  ) {
    this.availableOptions = this.settingsDataProvider.AVALIABLE_OPTIONS;
  }

  async openChangePinPage() {
    const modal = await this.modalCtrl.create({
      component: PinCodeModal,
      componentProps: {
        message: 'PIN_CODE.DEFAULT_MESSAGE',
        outputPassword: true,
        validatePassword: true,
      }
    });

    await modal.present();
    modal.onDidDismiss().then(({ data }) => {
      if (data.password) {
        this.pinCode.createUpdatePinCode(null, data.password);
      }
    });
  }

  async openManageNetworksPage() {
    const modal = await this.modalCtrl.create({
      component: CustomNetworkCreateModal
    });

    modal.present();
  }

  openPrivacyPolicy() {
    return this.inAppBrowser.create(constants.PRIVACY_POLICY_URL, '_system');
  }

  confirmClearData() {
    this.translateService
      .get([
        'CANCEL',
        'CONFIRM',
        'ARE_YOU_SURE',
        'SETTINGS_PAGE.CLEAR_DATA_TEXT',
      ])
      .takeUntil(this.unsubscriber$)
      .subscribe(async (translation) => {
        const confirm = await this.alertCtrl.create({
          header: translation.ARE_YOU_SURE,
          message: translation['SETTINGS_PAGE.CLEAR_DATA_TEXT'],
          buttons: [
            {
              text: translation.CANCEL
            },
            {
              text: translation.CONFIRM,
              handler: () => {
                this.onEnterPinCode = this.clearData;
                this.pinCode.open('PIN_CODE.DEFAULT_MESSAGE', false);
              }
            }
          ]
        });

        confirm.present();
      });
  }

  private clearData() {
    this.settingsDataProvider.clearData();
    this.navCtrl.navigateRoot('/intro');
  }

  onUpdate() {
    this.settingsDataProvider.save(this.currentSettings);
  }

  ngOnInit() {
    this.settingsDataProvider.settings
      .takeUntil(this.unsubscriber$)
      .do((settings) => this.currentSettings = settings)
      .subscribe();

    this.settingsDataProvider.onUpdate$
      .takeUntil(this.unsubscriber$)
      .do((settings) => this.currentSettings = settings)
      .subscribe();
  }

  ngOnDestroy() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

}
