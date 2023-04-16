/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
   let dev=arr.filter(function(emp){
    return emp.profession==="developer";
  }).map(function(emp){
    console.log(emp);
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  console.log(arr);
}

function addData() {
  //Write your code here, just console.log
  // arr.push(4,"susan","20","intern");
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2=[
    { id: 10, name: "jerry", age: "8", profession: "teacher" },
  { id: 20, name: "tom", age: "12", profession: "programmer" },
  { id: 30, name: "shinchan", age: "5", profession: "student" },
  ];
  let answer=arr.concat(arr2);
  console.log(answer);
}
