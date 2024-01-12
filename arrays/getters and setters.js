const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    set fullName(value) {
        const part = value.split(' ');
        this.firstName = part[0];
        this.lastName = part[1];
    }
};

person.fullName = 'John Smith';

console.log(person)