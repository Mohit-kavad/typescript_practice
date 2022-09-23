// objects

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuples
} = {
  // const person = {
  name: "Jonas",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// person.role  = [0,'admin','user']  // give error because of tuples allows to fixed length of array
// person.role.push('admin',2); // typescript an not catch this error
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["sports"]; // we can not define number here because of type is string[]

console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!ERROR!!
}

// enum

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR =2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const userInfo = {
  userId: 1,
  userName: "Max",
  role: Role.ADMIN,
};

if (userInfo.role === Role.AUTHOR) {
  console.log("is Admin", Role.ADMIN);
} else {
  console.log("not an admin");
}
