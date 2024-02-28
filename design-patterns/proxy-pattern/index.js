/*
Proxy pattern is a pattern, where you don't interact with objects directly but there a proxy object
which let you interact with your object
*/

const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
};

/*
The proxy made sure that we weren’t modifying the person object with faulty values, which helps us keep our data pure!
*/
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(`Hmm.. this property doesn't seem to exist`);
    } else {
      console.log(`The value of ${prop} is ${obj[prop]}`);
      // Reflect also provides get method to get values
      console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
    }
  },
  set: (obj, prop, value) => {
    if (prop === "age" && typeof value !== "number") {
      console.log(`Sorry, you can only pass numeric values for age.`);
    } else if (prop === "name" && value.length < 2) {
      console.log(`You need to provide a valid name.`);
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
      obj[prop] = value;
      // you can also use reflect object to set values
      Reflect.set(obj, prop, value);
    }
    return true;
  },
});

personProxy.nonExistentProperty;
// output => Hmm.. this property doesn't seem to exist
personProxy.age = "44";
// output => Sorry, you can only pass numeric values for age.
personProxy.name = "";
//output => You need to provide a valid name.

/* 
Proxies are a powerful way to add control over the behavior of an object. 
A proxy can have various use-cases: it can help with validation, formatting, notifications, or debugging.

Overusing the Proxy object or performing heavy operations on each handler method invocation can easily 
affect the performance of your application negatively. It’s best to not use proxies for performance-critical code.
*/
