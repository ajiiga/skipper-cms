import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class SnackbarService {
    private readonly duration = 5000;
    constructor(private readonly snackBar: MatSnackBar) {}

    error(message: string) {
        this.snackBar.open(message, null, { duration: this.duration });
    }
}
