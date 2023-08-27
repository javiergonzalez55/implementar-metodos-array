// função que automatiza o processo de atendimento aos pacientes que acontece por 
// ordem de chegada

function automatizarAtendimento(pacientes, operacao, nomeDoPaciente) {

    let tipoOperacao = false;

    const validarNomeDoPaciente = pacientes.some(paciente => paciente === nomeDoPaciente);

    if (validarNomeDoPaciente) {
        const indicePacienteFila = pacientes.findIndex(paciente => paciente === nomeDoPaciente);

        if (operacao === `atender`) {
            pacientes.splice(indicePacienteFila, 1);
            tipoOperacao = true;

        } else if (operacao === `agendar`) {
            pacientes.splice(indicePacienteFila, 1);
            pacientes.push(nomeDoPaciente);
            tipoOperacao = true;

        } else {
            console.log(`Tipo de operação Inválido`);

        }

        const listaPacientesAtulizada = pacientes.join(", ");
        console.log(listaPacientesAtulizada);

    } else {
        console.log(`O nome ${nomeDoPaciente} não aparece na lista. Por favor informe um nome válido`);
    }

}

automatizarAtendimento(['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'], `agendar`, `Ana`);


