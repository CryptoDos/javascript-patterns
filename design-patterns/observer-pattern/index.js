class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
  }

  unsubscribe(func) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

/* 
Pros
Using the observer pattern is a great way to enforce separation of concerns and the single-responsiblity principle.
The observer objects aren’t tightly coupled to the observable object, and can be (de)coupled at any time. 
The observable object is responsible for monitoring the events, while the observers simply handle the received data.

Cons
If an observer becomes too complex, it may cause performance issues when notifying all subscribers.

*/
