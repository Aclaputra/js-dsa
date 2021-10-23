
const setku = new Set();

setku.add(10);
setku.add(20);
setku.add({
    name: 'Acla',
    age: 20,
});

setku.add("coding topia");
setku.add(80.69);

console.log("How big is setku? " + setku.size);