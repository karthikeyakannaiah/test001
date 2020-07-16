function myfun(){
	window.alert('hello')
}
function myfun1(){
	console.log('hello karthikeya')
}
function dis(){
	document.getElementById('demo').style.display ='block';
	document.getElementById('demo2').style.display ='block';
}
// start


var myv = 100;
myv++;
console.log(myv);
var m2 = 'karthikeya';
console.log(m2.length+m2+m2[0]+m2[m2.length-3])
var m3 = 'jaran';
m3 = 'karan';
console.log(m3+m3.length+m3[m3.length-1])

function wordblanks(name,action,rateofaction){
	var result = '';
	result = 'my friend '+name+' '+action+'es '+rateofaction;
	return result;
}
console.log(wordblanks('bhargav','bath','slowly'))
// array
var arr = ['karthik ',17,103];
arr.push('kannaiah');
arr[2] = 104; 
console.log(arr+' '+arr[0]+arr.length);
//push shift unshift
var ara = [['kar','thik'],['thikeya','kar','eya'],['kanna','iah']];
console.log(ara[0][0]+ara[1][0]+' '+ara[2][0]+ara[2][1]);
var myremara = ara.pop();
console.log(ara);
console.log(myremara);		
var myshiara = ara.shift();
console.log(ara);
console.log(myshiara);

var ar2 = ['a','b','c'];
ar2.shift();
ar2.unshift('A')
console.log(ar2);

// funstions with arguments
function func(a,b) {
	console.log(a+' '+b);
}
func('karthikeya','kannaiah');

//return func
function fu2(n){
	return n*n;
}
console.log(fu2(6));
//understanding undefined return value
function ret(n){
	n = n + 5;
}
console.log(ret(6));

// assigning a returned value
function ret2(n){
	n = n + 5;
	return n;
}
returned = ret2(5);
console.log(returned);

// stand in line
function stand(arr,item){
	arr.push(item)
	return arr.shift();
}
var testarr = [1,2,3];
console.log(JSON.stringify(testarr));
console.log(stand(testarr,4));
console.log(JSON.stringify(testarr));


// boolean
function boo(){
	return true;
}
console.log(boo());
boo();

// t or f
function torf(tf){
	if (tf){
		return 'its true';
	}
	return 'its false';
}
console.log(torf(true));
console.log(torf(false));