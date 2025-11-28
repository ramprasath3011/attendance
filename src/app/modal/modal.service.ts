import { Injectable } from '@angular/core';
declare var bootstrap: any;
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}
  open(id: string) {
    const modalEl = document.getElementById(id);
    if (modalEl) {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }
  }

  close(id: string) {
    const modalEl = document.getElementById(id);
    if (modalEl) {
      const modal = bootstrap.Modal.getInstance(modalEl);
      modal?.hide();
    }
  }
}
