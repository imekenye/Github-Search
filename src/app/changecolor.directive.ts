import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appChangecolor]"
})
export class ChangecolorDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "#4B85FF";
  }
}
