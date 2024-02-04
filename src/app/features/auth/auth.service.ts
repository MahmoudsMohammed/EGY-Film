import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class authService {
  user = new BehaviorSubject<object>(
    JSON.parse(sessionStorage.getItem('userData')) ?? {}
  );
}
