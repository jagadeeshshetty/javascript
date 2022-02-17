
function User(name) {
    this.name = name;
    console.log(`${this.name} user access right is ${this.access}.`);
}

let admin = { access: true };
let nonAdmin = { access: false };

User.call(admin, 'Admin');
User.call(nonAdmin, 'Non Admin');
