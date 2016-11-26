import { Component, ViewEncapsulation } from '@angular/core';

// These imports are used, but StudentComponent isn't
// used so none of these imports should be included
// in the bundle, unless some other class were using them
import { Book, Grade} from './SimpleClasses';

@Component({
    selector: 'student',
    encapsulation: ViewEncapsulation.None,
    template: `<div>This is the student component.</div>`
})
export class StudentComponent {
    constructor() {
        const book = new Book();
        const grade = new Grade();
    }
}