export class Personagem {
    nome
    mana
    level
    tipo 
    descricao

    obterInsignia() {
        if (this.level >= 5) {
            return `Implacavel ${this.tipo}`;
        }

        return `${this.tipo} iniciante!`;
    }
}