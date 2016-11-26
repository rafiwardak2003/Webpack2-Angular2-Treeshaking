import { Component, ViewEncapsulation } from '@angular/core';

// Book and Grade won't be in the bundle since they are unused imports
// Subject is a used import so it will be included in the bundle
// Currently there's a bug in Webpack where it includes everything from the file
// in the bundle: https://github.com/webpack/webpack/issues/2899
import { Subject} from './SimpleClasses';

@Component({
    selector: 'teacher',
    encapsulation: ViewEncapsulation.None,
    template: `<div>This is the teacher component.</div>`
})
export class TeacherComponent {
    constructor() {
        // Since we are using Subject, it will be included in the bundle
        const subject = new Subject();
    }
}