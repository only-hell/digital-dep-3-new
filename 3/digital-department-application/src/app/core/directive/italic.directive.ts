import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[italic]'
})
export class ItalicDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'fontStyle', 'italic');
  }
}
