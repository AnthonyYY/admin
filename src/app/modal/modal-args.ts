export interface ModalArgs {
  content?: string;
  title?: string;
  cancelBtn?: boolean;
  closeBtn?: boolean;
  modalType?: 'default' | 'success' | 'warning' | 'danger' | 'primary';
  confirm?: Function;
  modalConfirmText?: string;
  modalCancelText?: string;
  size?: 'lg' | 'md' | 'sm' | '';
}
