import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[count]',
})
export class CountDirective implements OnInit {
  @Input() count: number;

  

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit(): void {
    console.log('hello from directive count');
    console.log(this.count);
    console.log(this.elRef);
    // il faut recupérer le contenu du nativeElement( input/textarea)
    console.log(this.elRef.nativeElement.attributes)
    const span = this.renderer.createElement('span');
    const text = this.renderer.createText(`10/${this.count}`);

    this.renderer.appendChild(span, text);

    this.renderer.appendChild(this.elRef.nativeElement, span);
  }
}
