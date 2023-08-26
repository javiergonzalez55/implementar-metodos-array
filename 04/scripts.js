// função que automatiza o processo de atendimento aos pacientes que acontece por 
// ordem de chegada

function automatizarAtendimento(pacientes, operacao, nomeDoPaciente) {

    let nomeDoPacienteValido = false;
    let tipoOperacao = false;

    for (const paciente of pacientes) {

        if (paciente === nomeDoPaciente) {
            nomeDoPacienteValido = true;

            if (operacao === `atender`) {
                pacientes.splice(0, 1);
                tipoOperacao = true;

            } else if (operacao === `agendar`) {
                pacientes.splice(pacientes.indexOf(paciente), 1);
                pacientes.splice(pacientes.length, 0, paciente);
                tipoOperacao = true;

            } else {
                console.log(`Tipo de operação Inválido`);

            }
        };
    };

    if (nomeDoPacienteValido && tipoOperacao) {

        const listaPacientesAtulizada = pacientes.join(", ");
        console.log(listaPacientesAtulizada);

    } else if (!nomeDoPacienteValido) {
        console.log(`O nome ${nomeDoPaciente} não aparece na lista. Por favor informe um nome válido`);
    };
};

automatizarAtendimento(['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'], `atender`, `Ana`);


