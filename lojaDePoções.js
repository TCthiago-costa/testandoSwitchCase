let option = 8
console.log("Bem-vindo à loja de poções!")
console.log("Escolha uma opção:\n1 - Poção de Vida (50 moedas)\n2 - Poção de Mana (30 moedas)\n3 - Poção de Força (70 moedas)\n4 - Poção de Velocidade (40 moedas)\n5 - Sair da loja")

switch (option) {
    case 1:
        console.log("Escolheste a opção 1, Você acabou de comprar uma poção de vida!");
        break;
    case 2:
        console.log("Escolheste a opção 2, Você acabou de comprar uma poção de mana!");
        break;
    case 3:
        console.log("Escolheste a opção 3, Você acabou de comprar uma poção de força!");
        break;
    case 4:
        console.log("Escolheste a opção 4, Você acabou de comprar uma poção de velocidade!");
        break;
    case 5:
        console.log("Escolheste a opção 5, Obrigado por visitar a loja de poções. Volte sempre!");
        break;
    default:
        console.log("Opção inválida, por favor escolha uma opção entre 1 e 5.");
}
