
  
export function CountDays(date1) {
  // Obter o número de milissegundos em um dia
  const oneDay = 1000 * 60 * 60 * 24;

  // Converta ambas as datas em milissegundos
  const date1InMs = date1.getTime();
  const date2InMs = new Date().getTime();

  // Calcula a diferença de milissegundos
  const differenceInMs = Math.abs(date1InMs - date2InMs);

  // Converte a diferença em dias e retorna
  return Math.round(differenceInMs / oneDay);
}

// Exemplo de uso
const today = new Date();
const birthday = new Date(2022, 11, 6);
const days = CountDays(today, birthday);
console.log(`${days} days`);
console.log(`${birthday.getTime} Data`);
console.log(CountDays( new Date(2023,0,1)))
