import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  clickCount = signal(0);

  constructor() {
    effect(() => {
      console.log(`Clicked: ${this.clickCount()} times.`);
    });
  }

  ngOnInit(): void {
    // const subscription = interval(1000)
    //   .pipe(
    //     map((value) => value * 3),
    //     filter((value) => value % 2 === 0)
    //   )
    //   .subscribe({
    //     next: (value) => console.log(`Current second: ${value}`),
    //     complete: () => console.log('Interval complete'),
    //     error: (error) => console.error('An error occurred:', error),
    //   });
    // // Unsubscribe when the component is destroyed
    // this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onClick() {
    this.clickCount.update((prevCount) => prevCount + 1);
  }
}
