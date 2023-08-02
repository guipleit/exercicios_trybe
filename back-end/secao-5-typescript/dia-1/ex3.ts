const printPersonalInfo = (data: { name: string, age: number, address: string }) => {
    console.log(`My name is ${data.name}, I'm ${data.age} years old and I live in ${data.address}`);
}
printPersonalInfo({ name: "John Doe", age: 30, address: "123 Main St" });