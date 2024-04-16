const fs = require("fs")
console.log('inicio')

fs.writeFileSync('arquivo.txt','oi', (err)=>{
    setTimeout(function(){
        console.log('Arquivo criado');
    },1000)
})

console.log("Fim")
