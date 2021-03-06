import {Component, Input, OnInit} from '@angular/core';
import {ModalArgs} from './modal-args';
import {ModalService} from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  @Input()
  public disabledAcceptBtn: boolean;
  public animated: boolean;
  public show: boolean;
  public cancelBtn: boolean;
  public closeBtn: boolean;
  public title: string;
  public content: string;
  @Input()
  public modalType: string;
  @Input()
  closeAfterConfirmClicked: boolean;
  @Input()
  public modalSize: 'lg' | 'md' | 'sm' | '';
  public modalConfirmText: string;
  public hasFooter: boolean;
  public modalCancelText: string;
  public modalEventsSubscriber;
  constructor(
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.init();
    this.modalEventsSubscriber = this.modalService.modalEventSubject.subscribe({
      next: (modalConfig: ModalArgs) => { this.showModal( modalConfig ); }
    });
  }

  init(): void {
    this.show = false;
    this.animated = true;
    this.cancelBtn = true;
    this.closeBtn = true;
    this.closeAfterConfirmClicked = true;
    this.modalType = this.modalType ||  'default';
    this.modalConfirmText = '确定';
    this.modalCancelText = '取消';
    this.hasFooter = true;
    this.modalSize = this.modalSize || 'sm';
  }

  confirm(): void {}

  showModal (modalArgs?: ModalArgs) {
    if (modalArgs) { Object.assign(this, modalArgs); }
    this.show = true;
    setTimeout( () => this.animated = true, 200);
  }

  hideModal(): void {
    this.init();
  }
}
