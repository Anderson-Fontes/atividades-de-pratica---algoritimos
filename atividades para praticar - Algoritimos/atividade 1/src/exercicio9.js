let i = 0;
while(i < 6 ){
nro = Math.random() * 100;
nro = Math.floor(nro);
if(nro < 20 || nro > 80 ){
 console.log(i, nro);
 i = i + 1;
    }
}