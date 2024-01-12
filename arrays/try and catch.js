const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    set fullName(value) {
        if (typeof (value) !== 'string') {
            throw new Error('Value not a string')
        }

        const part = value.split(' ');
        if (part.length !== 2) {
            throw new Error('Name doesnot contain first and last name;')
        }
        this.firstName = part[0];
        this.lastName = part[1]
    }
}
try {
    person.fullName = 'Omama';
}
catch (e) {
    console.log(e);
}
console.log(person)