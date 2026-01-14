import { Component } from '@angular/core';
import { AsyncPipe, DatePipe, LowerCasePipe, UpperCasePipe, CurrencyPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, I18nSelectPipe } from '@angular/common';
import { map, Observable, interval } from 'rxjs';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    AsyncPipe,
    CurrencyPipe,
    SlicePipe,
    DecimalPipe,
    PercentPipe,
    TitleCasePipe,
    I18nSelectPipe // ✅ added i18nSelectPipe
  ],
  templateUrl: './pipes-demo.html',
  styleUrls: ['./pipes-demo.css'],
})
export class PipesDemo {
  presentDate = new Date();
  price: number = 2000;

  Fruits: string[] = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  percentValue: number = 0.256;

  // ✅ Example text for TitleCasePipe
  sampleText: string = 'angular pipes demo with title case';

  // ✅ Example for i18nSelectPipe
  gender: string = 'female';
  genderMap: { [key: string]: string } = {
    male: 'He',
    female: 'She',
    other: 'They'
  };

  time$: Observable<Date> = interval(1000).pipe(
    map(() => new Date())
  );

  ngOnInit(): void {
    // lifecycle hook ready
  }
}
