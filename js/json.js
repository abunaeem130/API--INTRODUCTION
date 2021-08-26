// javascript object notation
// JSON
const user = { id: 111, name: 'gorib amir', job: 'actor' };
const stringigied = JSON.stringify(user);
// console.log(user);
// console.log(stringigied);

const shop = {
    name: 'alia store',
    address: 'ranbir road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'alia butt',
        profession: 'actor'
    },
    isExpensive: false,
};
const shopStringfied = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringfied.owner);
const converted = JSON.parse(shopStringfied);
console.log(converted.owner.profession);