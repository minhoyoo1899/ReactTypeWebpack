// 인터페이스의 정의
interface Personal {
  name: string;
  sayHello(): void;
}

/*
 인터페이스를 구현하는 클래스는 인터페이스에서 정의한 프로퍼티와 추상 메소드를 반드시 구현해야 한다.
 */

class Person implements Personal {
   // 인터페이스에서 정의한 프로퍼의 구현
  constructor(public name: string) { }
  
  // 인터페이스에서 정의한 추상 메소드의 구현
  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}
 
function greeter(person: Personal): void {
  person.sayHello();
}

const me = new Person('lee3');

greeter(me); //HELLO LEE

export default Person;