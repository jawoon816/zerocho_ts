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
