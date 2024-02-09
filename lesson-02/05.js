let passport = {
    name: "Petr",
    surname: "Petrov",
};

let passportCopy = Object.assign({}, passport, {name: "Ivan"});

console.log(passport.name); 
console.log(passportCopy.name); 