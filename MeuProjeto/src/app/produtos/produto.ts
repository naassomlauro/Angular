export class Produto {
    constructor(
    public id: string,
    public nome: string,
    public valor: string,
    public promocao: boolean,
    public valorPromo: string,
    public imagem: string,
    ){}
}