var fruit1 = "banana";
var fruit2 = "pineapple";
var fruit3 = "apple";
var fruit4 = "peach";
var fruit5 = "orange";

var fruitArray = ["banana", "pineapple", "apple", "peach", "orange"];

fruitArray[1]="carrot";
var mixedArray = [42, "pineapple", true, [3, 6, "nine"], "orange"];
console.log(fruitArray);


for(var fruit of fruitArray){
	if(fruit==="carrot"){
	console.log("this isn't a fruit");	
	}else{
	console.log(fruit);	
	}
}

for (var anything of fruitArray){
	console.log(fruit);
}

for(x of fruitArray){
	console.log("ckeck");
}