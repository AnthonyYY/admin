import { Component, OnInit } from '@angular/core';
import {ModalArgs} from './modal-args';
import {ModalService} from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  public animated: boolean;
  public show: boolean;
  public cancelBtn: boolean;
  public closeBtn: boolean;
  public title: string;
  public content: string;
  public modalType: string;
  public modalSize: 'lg' | 'md' | 'sm' | '';
  public modalConfirmText: string;
  public modalCancelText: string;
  public modalEventsSubscriber;
  constructor(
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.show = false;
    this.animated = false;
    this.cancelBtn = true;
    this.closeBtn = true;
    this.modalType = 'default';
    this.modalConfirmText = '确定';
    this.modalCancelText = '取消';
    this.modalSize = 'md';
    this.modalEventsSubscriber = this.modalService.modalEventSubject.subscribe({
      next: (modalConfig: ModalArgs) => { this.showModal( modalConfig ); }
    });
  }

  confirm(): void {}

  showModal (modalArgs?: ModalArgs) {
    if (modalArgs) { Object.assign(this, modalArgs); }
    this.show = true;
    setTimeout( () => this.animated = true, 100);
  }

  hideModal(): void {
    this.ngOnInit();
  }
}
