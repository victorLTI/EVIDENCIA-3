function calcu(){
let num=parseInt(document.getElementById("num").value);
let resul=document.getElementById("resul"); 
let cantidad=0;
 while(contador<num){

    let suma= 0;
    for(let i=1; i<=num; i++){
        for(let n=1; n<i;n++){
            if(i%n==0){
                suma+=n;
            }   
                }
                if(suma==i){
                    resul.value=(i)
                    cantidad++;
        }
        suma=0
    }
}
}