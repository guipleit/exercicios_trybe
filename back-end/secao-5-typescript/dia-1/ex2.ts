const joinNames = (firstName: string, lastName: string): string => {
    return firstName + " " + lastName;
}

const myName = joinNames("John", "Doe");

console.log(myName);