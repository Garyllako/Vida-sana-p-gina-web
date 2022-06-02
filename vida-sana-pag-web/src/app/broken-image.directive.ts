import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBrokenImage]'
})
export class BrokenImageDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('error')
  defaultImage(){
    const element = this.elementRef.nativeElement
    element.src = 'https://amazonia.mapbiomas.org/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'
  }
}
