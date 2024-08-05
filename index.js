const nome = prompt('Digite seu nome: ')
let cidades = ""
let contagem = 0

let choice = prompt('Já visitou alguma cidade? Digite Sim ou Não')

while (choice === 'Sim'){
    let cidade = prompt('Digite o nome da cidade: ') 
    cidades += ' - ' + cidade + '\n'
    contagem ++
    choice = prompt('Você ja visitou alguma outra cidade? Sim ou Não') 
    
}

alert(
    'Turista: ' + nome + 
    '\nQuantidade de cidades: ' + contagem + 
    '\nCidades visitadas:\n' + cidades
)