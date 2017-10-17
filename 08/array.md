# Array

배열 자체 수정(수정)  |  새 배열 반환(사본)
--|--
push  |  concat
pop |  slice
shift  |  
unshift  |  
shit  |  
shit  |  
shit  |  
shit  |  

* push : 배열 끝 요소 추가
* pop : 배열 끝 요소 제거
* shift : 배열 앞 요소 추가
* shift : 배열 앞 요소 제거

``` js
const arr = ["b","c","d"];
arr.push("e"); // arr = ["b","c","d","e"]
arr.pop(); // arr = ["b","c","d"]
arr.unshift("e"); // arr = ["e","b","c","d"]
arr.shift(); // // arr = ["b","c","d"]
```

* const : 배열의 끝에 추가

``` js
const arr = [1,2,3];
console.log(arr.concat(4,5,6)); // [1,2,3,4,5,6] arr는 바뀌지 않는다.
console.log(arr.concat([4,5,6]));// [1,2,3,4,5,6] arr는 바뀌지 않는다.
console.log(arr.concat([4,5],6));// [1,2,3,4,5,6] arr는 바뀌지 않는다.
console.log(arr.concat([4,[5,6]]));// [1,2,3,4,[5,6]] arr는 바뀌지 않는다.
```
* slice : 배열 일부 가져오기
  - 첫번째 매개변수는 어디서부터 가져올지를, 두번째 매개변수는 어디까지 가져올지(바로 앞 인덱스까지)
  - 음수 사용할 경우 배열의 끝에서부터(-1이면 끝,-2이면 끝에서 2번째)

``` js
const arr = [1,2,3,4,5];
console.log(arr.slice(3)) // [4,5] arr은 바뀌지 않습니다.
console.log(arr.slice(2,4)) // [3,4]
console.log(arr.slice(-2)) // [4,5]
console.log(arr.slice(1, -2)) //
console.log(arr.slice(-2,-1))
```
