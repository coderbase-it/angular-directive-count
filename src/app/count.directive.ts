import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Directive({
  selector: '[count]',
})
export class CountDirective implements OnInit {
  @Input() count: number;

  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef,
    private control: ControlContainer
  ) {}

  ngOnInit(): void {
    console.log('hello from directive count');
    console.log(this.count);
    console.log(this.elRef);
    // il faut recupérer le contenu du nativeElement( input/textarea)
    let domElement = this.elRef.nativeElement as HTMLInputElement;
    console.log(this.control);

    const span = this.renderer.createElement('span');
    const text = this.renderer.createText(`10/${this.count}`);

    this.renderer.appendChild(span, text);

    this.renderer.appendChild(this.elRef.nativeElement, span);
  }
}
