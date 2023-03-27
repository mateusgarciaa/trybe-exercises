const studentRegister = (name, age) => {
  // Verifica se as informações necessárias foram fornecidas
  if (!name || !age) {
    throw new Error('Todas as informações são necessárias');
  }

  // Verifica se a idade é suficiente para começar as aulas
  if (age < 18) {
    throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
  }

  // Se a idade for suficiente, retorna a mensagem de boas-vindas
  return `${name}, seja bem-vindo(a) à AuTrybe!`;
};