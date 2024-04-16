import inquirer from "inquirer"



function processarEssaMerda(n1, n2){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let soma = n1+n2;
            const sucesso = false;
            if(sucesso){
                resolve(soma);
            }else{
                reject("Você é uma merdinha")
            }
        }, 5000)
    });
}


inquirer.prompt([
    {
        name:'p1',
        message: 'Qual a primeira nota?',
    },
    {
        name:'p2',
        message: 'Qual a segunda nota?',
    },
]).then((answers)=>{
    let n1 = parseInt(answers.p1)
    let n2 = parseInt(answers.p2)
    processarEssaMerda(n1, n2).then((soma)=>{
        console.log(soma)
    }).
    catch(err => console.log(err))

})
.catch(err => console.log(err))



