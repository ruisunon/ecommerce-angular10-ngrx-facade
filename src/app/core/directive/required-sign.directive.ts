
import { Directive, OnInit, ElementRef, Renderer2, NgModule } from '@angular/core';
// To keep implementation easy we will use [required] selector property in meta information
//  so that there will not much work left to do in template across the application.
@Directive({
  selector: '[required]',
})
export class RequiredSignDirective implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    const parent = this.renderer.parentNode(this.el.nativeElement);

    if (
      parent.getElementsByTagName('LABEL').length &&
      !parent.getElementsByClassName('required-asterisk').length
    ) {
      parent.getElementsByTagName('LABEL')[0].innerHTML +=
        '<span class="required-asterisk">*</span>';
    }
 
    // if (parent.getElementsByTagName('LABEL').length) {
    //   parent.getElementsByTagName('LABEL')[0].innerHTML +=
    //     '<span class="required-asterisk">*</span>';
    // }
  }
}

// Sometime you may have multiple modules with their own components, 
// in that case, to easily inject a directive, we can create its own module.

// So, after creating the Directive’s own module we DON’T need to add a directive 
// in the declaration, instead, we will add the directive module in import array.

// For this modular practice add @NgModule in the directive as shown below:

@NgModule({
  declarations: [RequiredSignDirective],
  exports: [RequiredSignDirective],
})
export class RequiredSignDirectiveModule {}

// In the template we will have Bootstrap form element as shown below:

//         <div class="form-group">
//             <label>Text Field</label>
//             <input type="email" class="form-control" required>
//         </div>Copy
// In the above HTML code, we need to append <span class="required-asterisk">*</span> in element, 
// so finally our directive will convert this to following:

//         <div class="form-group">
//             <label>Text Field
//                 <span class="required-asterisk">*</span>
//             </label>
//             <input type="email" class="form-control" required>
//         </div>