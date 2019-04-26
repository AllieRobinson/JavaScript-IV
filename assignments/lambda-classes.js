// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchphrase = attributes.catchphrase;
    }
    demo (subject) {
        return `Today we are learning about ${subject}.`
    }
    grade (student, subject) {
return `${student} recieves a perfect score on ${subject}!`
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects () {
        console.log(favSubjects);
    }
    PRAssignment (name, subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge (name, subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standup (name, channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode (name, student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}.`
    }
}

const bill = new Instructor ({
    name: 'Bill',
    age: 45,
    location: 'Phoenix',  
    gender: 'M',
    specialty: 'JavaScript',
    favLanguage: 'JavaScript',
    catchphrase: 'Hip hip hooray!'
});

console.log(bill.demo('Javascript'));
console.log(bill.speak());

const lindsay = new Instructor ({
    name: 'Lindsay',
    age: 27,
    location: 'Mt. Rainier',  
    gender: 'F',
    specialty: 'Python',
    favLanguage: 'Python',
    catchphrase: "It's all good."
});

console.log(lindsay.grade('Allie', 'Python'));

const sarah = new Student ({
    name: 'Sarah',
    age: 21,
    location: 'San Fran',  
    gender: 'F',
    previousBackground: 'Waitress',
    className: 'WEBPT25'
}); 

console.log(sarah.sprintChallenge(name, 'CSS'));
console.log(sarah.PRAssignment(name, 'Python'));
console.log(sarah.speak());

const mike = new ProjectManager ({
    name: 'Mike',
    age: 34,
    location: 'Nomad',  
    gender: 'M',
    specialty: 'Font end',
    favLanguage: 'CSS',
    catchphrase: 'What goes up must come down',
    gradClassName: 'WEBPT1',
    favInstructor: 'Keiran', 
});

console.log(mike.standup(name, "Channel 3"));
console.log(mike.debugsCode(name, 'Joe', 'Python'));
