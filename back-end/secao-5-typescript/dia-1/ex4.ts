type personalInfo = {
    firstName: string;
    lastName: string;
    age: number;
    address: string;
};

const printPersonalInfo2 = (data: personalInfo) => {
    console.log(`My name is ${data.firstName} ${data.lastName}, I'm ${data.age} years old and I live in ${data.address}`);
}
