export class TarefaModel {
    constructor(
        public id: number, 
        public titulo: string, 
        public descricao: string,
        public dataCriacao: Date,
        public concluido: boolean
    ) { }
}