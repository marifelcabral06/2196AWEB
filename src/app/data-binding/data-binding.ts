import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
// Interpolation
studentName: string = "Marifel Cabral";
score: number = 95;

// Property binding
imageUrl: string = "https://picsum.photos/200";
isDisabled: boolean = true;

// Attribute binding
colSpanValue: number = 3;

// Class binding
isPassing: boolean = true;

// Style binding
boxColor: string = "purple";
boxSize: string = "150px";

}
