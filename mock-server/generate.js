var faker = require("faker");

var database = { products: [],
                 customers: [] 
                };

for (var i = 1; i <= 30; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    quantity: faker.random.number(),
  });
  database.customers.push({
    id: i,
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    city: faker.address.city(),
    country: faker.address.country(),
    title: faker.name.title()
  });
}

console.log(JSON.stringify(database));
