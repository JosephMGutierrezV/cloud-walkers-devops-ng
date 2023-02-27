import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMessage } from '../../entities/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageSource = new Subject<IMessage | IMessage[]>();
  private clearSource = new Subject<string>();

  messageObserver = this.messageSource.asObservable();
  clearObserver = this.clearSource.asObservable();

  add(message: IMessage) {
    if (message) {
      this.messageSource.next(message);
    }
  }

  addAll(messages: IMessage[]) {
    if (messages && messages.length) {
      this.messageSource.next(messages);
    }
  }

  clear(key: string) {
    this.clearSource.next(key);
  }
}
