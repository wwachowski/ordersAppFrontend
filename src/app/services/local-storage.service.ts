import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(key: string, item: string): void {
    localStorage.setItem(key, item);
  }

  setObj(key: string, item: object): void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  getObj(key: string): object | null {
    let val = localStorage.getItem(key);
    return val && JSON.parse(val);
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
