const tarefas = [
  {
    titulo: 'Passear com o cachorro',
    concluida: false,
    dias: 10,
  },
  {
    titulo: 'Comprar leite',
    concluida: false,
    dias: 5,
  },
  {
    titulo: 'Lavar louça',
    concluida: true,
    dias: 60,
  },
];

const concluidas = ({ concluida }) => concluida === true;

const tarefasConcluidas = tarefas.filter(concluidas);

for (let i = 0 ; )

console.log(tarefasConcluidas);
