//typescript에서 타입을 추론하는 것들은 타입지정을 안해도됨..
//const면 항상 같은 값이라 타입을 지정하지 않는것이 더 나음(타입이 더 부정확해짐)
const a: number = 5;
const b: string = "5";
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: symbol = Symbol.for("abc");
// const g: bigint = 1000000n;
const h: any = true; //any:모든타입(any를 쓰는 순간 자바스크립트..)
const i: true = true; //값을 고정해버림(무조건 트류) 타입에 고정된 원시값을 넣을 수 있다.

// function add(x: number, y: number): number { return x + y }

//type으로 타입을 선언하는 방식= 타입 애일리어스(type alias)
// type Add = (x: number, y: number) => number
//interface를 통해서 만드는 방법도 있음.

let aa = 123;
aa = "hello" as unknown as number; //as=>앞의 키워드를 강제로 바꿔줌
interface Add {
  (x: number, y: number): number;
}
const add: Add = (x, y) => x + y;

try {
  //빈 array에 never[] type이 뜨면 array에는 아무 타입도 올 수가 없다.(일반적인 타입은 올 수 없다.)
  const array: number[] = []; //type을 꼭 지정해주자
  array[0];
} catch (error) {
  error;
}

const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

const arr: string[] = ["123", "456"];
const arr2: Array<number> = [123, 456];
//<>제네릭
const arr3: [number, number, string] = [123, 456, "hello"];
//튜플타입

//콜론,타입,인터페이스,제네릭,바디없는 function,as는 javascript코드에서 사라짐

const head = document.querySelector("#head")!; //!를 붙이면 null인 상태가 없다는 것.(무조건 존재한다. null이나 undefined가 아님)(비추..)
head.innerHTML = "hello"; //head tag가 없을 때 can not read property.....err....
if (head) {
  head.innerHTML = "hello";
} //!대신 if를 사용해라

type World = "world" | "hell";
const aaa: World = "world";
const bbb = `hello ${a}`;

type Greeting = `hello ${World}`;
const ccc: Greeting = "hello hell"; //타입을 정교하게 지정해놓으면 자동완성 추천 받을 수 있다.

function rest(...args: string[]) {}
rest("1", "2", "3");

const tuple: [string, number] = ["1", 1];
// tuple[2]=>err
tuple.push("hello"); //err안남..typescript가 이것까진 잡지못함

// enum: 여러개의 변수들을 하나의 그룹으로 묶고 싶을때 사용(object랑 다른 점은 자바스크립트에서 사라짐.)
const enum Edirection {
  Up = 3,
  Down = 5,
  Left = 4,
  Right = 6,
}
const aaaa = Edirection.Up; //3
const cccc = Edirection.Left; //4

const Odirection = {
  Up: 3,
  Down: 5,
  Left: 4,
  Right: 6,
} as const;
//as const가 없으면? typescript가 각각의 타입을 number로 인식하기 때문에
//각각의 타입을 Up:3...이런식으로 붙여줘야함. 각 타입을 써주는 것 대신 as const를 써도된다.
//속성들을 전부 상수로 쓰겠다..!

function walk(dir: Edirection) {} //enum은 직접 타입으로 쓸 수 있다.
//dir: 네 개의 변수들 중 하나여야 한다는 뜻.

// enum을 안쓰려면..
const object = { a: "123", b: "hello", c: "world" } as const;
type key = keyof typeof object; //key값만 가져오고 싶다.
type value = typeof object[keyof typeof object]; //value만 가져오고 싶다.

type Direction = typeof Odirection[keyof typeof Odirection];
function run(dir: Direction) {}

walk(Edirection.Left);
run(Odirection.Right);

type A = { a: string };
const x: A = { a: "hello" };
// const x: { a: string } = { a: "hello" };로 적어도 된다.

interface B {
  a: string;
}
const y: B = { a: "hello" };
//간단하게 하고 싶으면 type사용, interface는 상속받고 implement 구현하고 객체지향 내용이 포함되어 있다.
//객체지향 프로그래밍을 하고 싶다면 interface 사용

function added(x: string | number, y: string | number): string | number {
  return `${x}+${y}`;
} //|:union=>type 추론이 제대로 안된다. typescript는 모든 경우의 수를 고려하는데
//return 값이 string|number인게 말이 안됨..
added(1, 2);
added("1", "2");
added(1, "2");

type AA = { hello: "world" } & { zero: "cho" };
//&(intersection)는 둘 다 만족. 둘 중 하나가 없으면 err=>모든 속성이 다 있어야 한다.
// |는 하나의 속성만 있으면 된다.
const aA: AA = { hello: "world", zero: "cho" };

type Animal = { breath: true };
type Poypuryu = Animal & { breed: true };
type Human = Poypuryu & { think: true };

interface Aaaa {
  breath: true;
}
interface Ba extends Aaaa {
  //상속(&이랑 비슷한 맥락)
  //interface가 type을 extends할 수도 있다.(반대도 가능)
  breed: true;
}
//interface는 같은 이름으로 여러번 선언 가능하다=>선언 할 때마다 합쳐짐
//interface 확장 가능하다.(다른 라이브러리 코드 수정 가능함)
const br: Ba = { breath: true, breed: true };

const zeroch: Human = { breath: true, breed: true, think: true };

// interface I
// type T
// enum E
//이런 식으로 붙일 수 있고 안붙일 수가 있는데 요즘 국룰은 안붙이는거...!에디터로 다 알 수 있음 굳이 안붙임(타입의 의미가 없다)
//제네릭에만 붙이고 실제 네이밍에는 안붙이는 추세