import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';

@Directive({
  selector: '[appMaxHeight]'
})
export class MaxHeightDirective implements OnChanges {
  @Input() cutOff: number = 0;
  @Input() overrideShow: boolean = false;
  @Input() wrapper!: HTMLDivElement;

  @Output() textHidden = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {
  }

  ngOnChanges(): void {
    const shorten = this.el.nativeElement.offsetHeight > this.cutOff;
    this.wrapper.style.maxHeight = shorten && !this.overrideShow ? `${this.cutOff}px` : 'unset';
    if(shorten && !this.overrideShow) {
      this.wrapper.classList.add('shorten');
    } else {
      this.wrapper.classList.remove('shorten')
    }
    this.textHidden.emit(shorten);
  }
}
