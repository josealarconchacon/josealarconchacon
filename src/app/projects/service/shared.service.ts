import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private showSchProjectSubject = new BehaviorSubject<boolean>(false);
  showSchProject$ = this.showSchProjectSubject.asObservable();

  setShowSchProject(show: boolean) {
    this.showSchProjectSubject.next(show);
  }
}
