import {Component, OnInit} from '@angular/core';
import {ModalComponent} from '../modal/modal.component';
import {ModalService} from '../modal/modal.service';
import {ModalArgs} from '../modal/modal-args';
import {ConfirmService} from './confirm.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.less']
})
export class ConfirmComponent extends ModalComponent implements OnInit {
  constructor(
    modalService: ModalService,
    private confirmService: ConfirmService
  ) {
    super(modalService);
  }

  confirmEventsSubscriber;

  ngOnInit() {
    this.init();
    this.confirmEventsSubscriber = this.confirmService.confirmEventSubject
    .asObservable()
    .subscribe({
      next: (modalConfig: ModalArgs) => { this.showModal( modalConfig ); }
    });
  }
}
