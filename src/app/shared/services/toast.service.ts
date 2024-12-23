import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

type ToastType = 'info' | 'success' | 'warning' | 'danger';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  // Constants for default configuration
  private readonly DEFAULT_DURATION: number = 5000;
  private readonly DANGER_DURATION: number = 0; // Danger stays until manually closed
  private readonly DEFAULT_HORIZONTAL_POSITION: MatSnackBarHorizontalPosition =
    'left';
  private readonly DEFAULT_VERTICAL_POSITION: MatSnackBarVerticalPosition =
    'bottom';

  // CSS classes for different types of toasts
  private readonly TOAST_CLASSES = {
    info: ['toast-snackbar', 'info'],
    success: ['toast-snackbar', 'success'],
    warning: ['toast-snackbar', 'warning'],
    danger: ['toast-snackbar', 'danger'],
  };

  constructor(private _snackBar: MatSnackBar) { }

  // Adding customConfig if any other component or view want to use the toast service with custom configuration
  open(
    message: string,
    type: ToastType = 'info',
    customConfig?: MatSnackBarConfig
  ): void {
    const config = this.getOptionsByType(type);

    // Override default config with any custom config if provided
    const mergedConfig = { ...config, ...customConfig };

    this._snackBar.open(message, 'Cerrar', mergedConfig);
  }

  private getDefaultOptions(): MatSnackBarConfig {
    return {
      duration: this.DEFAULT_DURATION,
      horizontalPosition: this.DEFAULT_HORIZONTAL_POSITION,
      verticalPosition: this.DEFAULT_VERTICAL_POSITION,
      panelClass: this.TOAST_CLASSES.info, // Defaults to 'info'
    };
  }

  private getOptionsByType(type: ToastType): MatSnackBarConfig {
    const defaultOptions = this.getDefaultOptions();

    switch (type) {
      case 'info':
        return { ...defaultOptions, panelClass: this.TOAST_CLASSES.info };
      case 'success':
        return { ...defaultOptions, panelClass: this.TOAST_CLASSES.success };
      case 'warning':
        return { ...defaultOptions, panelClass: this.TOAST_CLASSES.warning };
      case 'danger':
        return {
          ...defaultOptions,
          duration: this.DANGER_DURATION, // Disable auto-close for danger type
          panelClass: this.TOAST_CLASSES.danger,
        };

      default:
        console.error(`Unknown toast type: ${type}`);
        return defaultOptions; // Fallback to default options if the type is unknown
    }
  }
}
