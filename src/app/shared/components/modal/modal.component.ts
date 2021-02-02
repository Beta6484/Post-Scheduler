import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit, OnDestroy {
  private element: any;
  public showModal: boolean = false;
  @Input() id: string;
  @Input() title?: string;

  constructor(
    private modalService: ModalService,
    private el: ElementRef
  ) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if(!this.id) {
      console.error('O modal precisa ter um id');
      return;
    }

    document.body.appendChild(this.element);

    this.element.addEventListener('click', el => {
      if (el.target.className === 'modal') {
        this.close();
      }
    });

    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  public open(): void {
    this.showModal = true;
    document.body.classList.add('modal--open');
  }

  public close(): void {
    this.showModal = false;
    document.body.classList.remove('modal--open');
  }
}
