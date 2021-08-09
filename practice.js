function myArray(arr,callback){
arr.push(6);
callback();

}
let arr=[2,3,4];
myArray(arr,function(){
    console.log(arr);
})
