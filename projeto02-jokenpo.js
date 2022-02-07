const prompt = require("prompt-sync")();

//Projeto 2 - Programa Jokenpô (pedra, papel e tesoura)

console.clear();
const nome = prompt(`   Por gentileza, digite o seu nome para iniciar o jogo: `);

console.log(`\tOlá, ${nome}, tudo bem?`);
console.log (`\n\tSeja bem-vindo(a) ao seu momento de diversão - Pedra, papel e tesoura, também chamado em algumas regiões do Brasil de jokenpô, é um jogo de mãos recreativo e simples para duas ou mais pessoas, que não requer equipamentos nem habilidade. O jogo é frequentemente empregado como método de seleção, assim como lançar moedas, jogar dados, entre outros.\nPor aqui, você vai jogar com a Inteligência Artificial (IA) do computador, escolhendo um número de partidas desejadas - a IA é amiga dos humanos, mas não medirá esforços para vencer este jogo. Rsrs`);
const escolhasPossiveis = ["pedra", "papel", "tesoura"];
let placarRodadas = [0,0];
let replay = ``;

do{
    placarRodadas = [0,0];
    let numRodadas = 0;
    let escolhaAleatoria = 0;
    let escolhasJogador = ``;

    numRodadas = +prompt('  Por gentileza, digite o número de rodadas desejadas para iniciar a partida: ');

    for (let i = 0; i < numRodadas; i++) {
        console.log(`\n\tRodada nº: ${i+1}`);
        console.log(`Digite uma das opções: pedra, papel ou tesoura: `);
        escolhasJogador = prompt(``);

        escolhaAleatoria = Math.floor(Math.random() * 3);
        console.log(`Você escolheu ${escolhasJogador}. O computador escolheu ${escolhasPossiveis[escolhaAleatoria]}.`);
        teste(escolhasJogador, escolhaAleatoria);

    } 
    console.log(`Placar`);
    console.log(`${nome} ${placarRodadas[0]} X ${placarRodadas[1]} Inteligência Artificial`);
    if(placarRodadas[0] > placarRodadas[1]){
        console.log(`Vitória!`);

    } else if(placarRodadas[0] < placarRodadas[1]){
        console.log(`Derrota!`);
    
        
    } else{
        console.log(`Empate!`);
    }
    do{
        replay = prompt(`Deseja jogar novamente?`).toLowerCase();
        if(replay != `sim` && replay != `nao`){
            console.log(`Por favor, digite uma resposta válida.`);
        }
    } while(replay != `sim` && replay != `nao`);

} while(replay == `sim`);


function teste(a,b){
    if (
        (a === "pedra" && b == 1) ||
        (a === "papel" && b == 2) ||
        (a === "tesoura" && b == 0)
      ) {
        return (
          placarRodadas[1]++,
          console.log(`
      
      Que pena, você não pontuou nesta rodada!
      `),
      console.log(placarRodadas));
    } else if(a == escolhasPossiveis[b]){
        console.log(`Empate!`);
    } else{
        return (
            placarRodadas[0]++,
            console.log(`Parabéns, você pontuou nesta rodada!
            `),
            console.log(placarRodadas)) 
    }
    console.log(placarRodadas);
}