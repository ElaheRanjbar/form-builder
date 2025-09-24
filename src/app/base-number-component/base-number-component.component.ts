import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-base-number-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './base-number-component.component.html',
  styleUrl: './base-number-component.component.scss'
})
export class BaseNumberComponentComponent {
  control!: FormControl<number | null>;
  label?: string;
  placeholder?: string;
  name?: string;
}
