var a=[9,5,4,17,8,17,9,8,11]; 
var y=[];
for (i=0;i<a.length;i++){
	var flag=true;
	for(j=2;j<a[i];j++){
	if(a[i]%j==0){
			flag=false;
			break;
		}
	}
	if(flag){
		y.push(a[i]);
	}
}
console.log(y);