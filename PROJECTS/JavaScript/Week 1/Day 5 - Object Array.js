const users = [
    {
        id: 1,
        username: "cmagno",
        password: "pass123",
        firstname: "Cedric",
        lastname: "Magno",
        role: "admin"
    },
    {
        id: 2,
        username: "jsmith",
        password: "pass123",
        firstname: "John",
        lastname: "Smith",
        role: "user"
    },
    {
        id: 3,
        username: "mjones",
        password: "pass456",
        firstname: "Mary",
        lastname: "Jones",
        role: "user"
    },
    {
        id: 4,
        username: "rbrown",
        password: "pass789",
        firstname: "Robert",
        lastname: "Brown",
        role: "user"
    },
    {
        id: 5,
        username: "swilson",
        password: "pass012",
        firstname: "Sarah",
        lastname: "Wilson",
        role: "admin"
    }
];

// filter admins from users array and display their usernames
console.log("Admins:");
const admins = (users.filter(u => u.role === "admin"));
admins.forEach(a => {
    console.log(a.username);
});

joinAdmins = admins.map(a => a.username).join(", ");
console.log(`Admins: ${joinAdmins}`);

// display admins with their full names
console.log("Admins with full names:");
admins.forEach(a => {
    console.log(`${a.username}: ${a.firstname} ${a.lastname}`);
});

// display all users with their full names and roles
console.log("All users with full names and roles:");
users.forEach(u => {
    console.log(`${u.username}: ${u.firstname} ${u.lastname} (${u.role})`);
});

const getNextId = () => users.reduce((max, user) => Math.max(max, user.id), 0) + 1;

const addUser = ({ username, password, firstname, lastname, role }) => {
    const newUser = {
        id: getNextId(),
        username,
        password,
        firstname,
        lastname,
        role
    };
    users.push(newUser);
    return newUser;
};

// example
addUser({
    username: "nlee",
    password: "pass234",
    firstname: "Nancy",
    lastname: "Lee",
    role: "user"
});
console.log("Added user:", users[users.length - 1]);