import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-base-string-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './base-string-component.component.html',
  styleUrl: './base-string-component.component.scss'
})
export class BaseStringComponentComponent {
  @Input() control!: FormControl<string | null>;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() name?: string;
}
