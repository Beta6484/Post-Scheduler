import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomCheckboxComponent),
    multi: true
  }]
})

export class CustomCheckboxComponent implements ControlValueAccessor  {
  public onChange = (_ => { });
  public onBlur = (_ => { });
  @Input() checked: boolean = false;
  @Input() icon: string = 'angular';
  @Input() disabled: boolean = false;

  public writeValue(obj: boolean): void {
    this.checked = obj;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onBlur = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public onChanged($event) {
    this.checked = $event && $event.target && $event.target.checked;
    this.onChange(this.checked);
  }
}
