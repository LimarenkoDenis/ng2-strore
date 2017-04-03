import { Injectable } from '@angular/core';
import {NotificationsService } from 'angular2-notifications';

@Injectable()
export class NotificationService {

  public constructor(
    private _notificationsService: NotificationsService,
  ) { }

  public waitingNotification() {
    this._notificationsService.info(
      'Notification',
      'Wait, please',
      {
          timeOut: 10000,
          maxLength: 12
      }
    );
  }

  public successNotification() {
    this._notificationsService.success(
      'Notification',
      'Success',
      {
          timeOut: 5000,
          showProgressBar: false
      }
    );
  }
}
