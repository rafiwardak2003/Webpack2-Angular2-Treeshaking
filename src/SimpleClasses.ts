class Grade {
    grade: number;

    set updateGrade(grade: number) {
        this.grade = grade;
    }
}

class Subject {
    name: string;

    set updateName(name: string) {
        this.name = name;
    }
}

class Book {
    title: string;

    set updateTitle(title: string) {
        this.title = title;
    }
}

export { Grade, Subject, Book };