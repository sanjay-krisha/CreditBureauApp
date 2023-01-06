import { Directive, ElementRef, forwardRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
    selector: '[onlyNumber]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => OnlyNumberDirective),
        multi: true
    }]
})
export class OnlyNumberDirective implements ControlValueAccessor {
    private value: string | undefined;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) {
    }

    @HostListener('input', ['$event.target.value'])
    onInputChange(value: string) {
        const filteredValue: string = filterValue(value);
        this.updateTextInput(filteredValue, this.value !== filteredValue);
    }

    @HostListener('blur')
    onBlur() {
 
    }

    private updateTextInput(value: string, propagateChange: boolean) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
        if (propagateChange) {
  
        }
        this.value = value;
    }

    // ControlValueAccessor Interface
    registerOnChange(fn: any): void {

    }

    registerOnTouched(fn: any): void {

    }

    setDisabledState(isDisabled: boolean): void {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    }

    writeValue(value: any): void {
        value = value ? String(value) : '';
        this.updateTextInput(value, false);
    }
}

function filterValue(value: string): string {
    return value.replace(/[^0-9]*/g, '');
}

