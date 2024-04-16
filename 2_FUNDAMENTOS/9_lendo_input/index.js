const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual a sua linguagem preferida?", (language)=>{
    readline.close()
})



// Cria um WriteStream para escrever em um arquivo chamado 'output.txt'
const writeStream = fs.createWriteStream('process.stdout');

// Escreve dados no arquivo
writeStream.write('Olá, mundo!\n');
writeStream.write('Este é um exemplo de escrita usando WriteStream.\n');

// Fecha o WriteStream após a escrita
writeStream.end();