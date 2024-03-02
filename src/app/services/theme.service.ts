import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  toggleSwitchMode(): void {
    if (document.documentElement.classList.contains("light")) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.add("light");
      }
    }
  }

  toggleDarkMode(): void {
    if (document.documentElement.classList.contains("light")) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else if (!(document.documentElement.classList.contains("light") || document.documentElement.classList.contains("dark"))) {
      document.documentElement.classList.add("dark");
    } else {
      if (!(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches)) {
        document.documentElement.classList.add("light");
      }
    }
  }

  toggleLightMode(): void {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else if (!(document.documentElement.classList.contains("light") || document.documentElement.classList.contains("dark"))) {
      document.documentElement.classList.add("light");
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add("light");
      }
    }
  }

  toggleSystemMode(): void {
    if (document.documentElement.classList.contains("light")) {
      document.documentElement.classList.remove("light");
    } else if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    }
  }
}
