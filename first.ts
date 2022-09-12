const a: number = 5;
const b: string = '5'
const c:boolean = true;
const d: undefined = undefined;
const e: null = null;
const f:symbol = Symbol.for('abc')
const g:bigint = 1000000n;
const h:any = true; //any:모든타입(any를 쓰는 순간 자바스크립트..) 
const i:true = true //값을 고정해버림(무조건 트류) 타입에 고정된 원시값을 넣을 수 있다.

// function add(x: number, y: number): number { return x + y }


//type으로 타입을 선언하는 방식= 타입 애일리어스(type alias)
// type Add = (x: number, y: number) => number 
//interface를 통해서 만드는 방법도 있음.
interface Add {
  (x: number, y: number): number 
}
const add:Add = (x, y) => x + y;

const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };

const arr:string[] =['123','456']
const arr2: Array<number> = [123,456]
//<>제네릭
const arr3: [number, number, string]= [123,456,'hello']
//튜플타입