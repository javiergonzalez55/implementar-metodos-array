// sistema que automatiza o atendimento dos pacientes de uma clinica segundo o tipo de 
// operação solicitada pelo paciente atender, agendar ou cancelar. O sistema organiza as
// filas corerspondentes.

let pacientesAtender = [];

const sistemaAtendimendo = {

    // insira aqui a lista de pacientes
    listaAtendimento: ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'],

    // informe aqui o nome do paciente
    nomeDoPaciente: `Maria`,

    // digite aqui o tipo de operação (agendar/atender/cancelar)
    tipoOperacao: `cancelar`,

    // Paciente foi atendido? digite (s/n)
    pacientesAtendidos: `s`,

    agendarPacientes: function automatizarAtendimento(pacientes, nomeDoPaciente) {

        let nomeDoPacienteValido = false;

        for (const paciente of pacientes) {

            if (paciente === nomeDoPaciente) {

                nomeDoPacienteValido = true;

                if (this.tipoOperacao === `atender`) {
                    pacientes.splice(pacientes.indexOf(paciente), 1);
                    return pacientes;

                } else if (this.tipoOperacao === `agendar`) {
                    pacientes.splice(pacientes.indexOf(paciente), 1)
                    pacientes.splice(pacientes.length, 0, paciente);

                }
            };
        }
        if (nomeDoPacienteValido) {

            const listaPacientesAtulizada = pacientes.join(", ");
            console.log(listaPacientesAtulizada);

        } else {
            return `Paciente ${nomeDoPaciente} não , poe favor insira-o ao final da lista de atendimentos`;

        };
    },

    atenderPaciente: function automatizarAtendimento(pacientes) {

        let listaPacientesAtulizada = "";
        let pacienteAtendido = "";

        if (this.pacientesAtendidos === "S" || this.pacientesAtendidos === "s") {
            pacienteAtendido = pacientes.splice(pacientes.indexOf(this.nomeDoPaciente), 1);
            pacientesAtender = pacientes;
            listaPacientesAtulizada = pacientesAtender.join(", ");
            return `Paciente ${pacienteAtendido} foi atendido(a).
            Lista de Atendimento: ${listaPacientesAtulizada}`;

        } else {
            pacientesAtender = pacientes;
            listaPacientesAtulizada = pacientesAtender.join(", ");
            return `Lista de Atendimento: ${listaPacientesAtulizada}`;
        };
    },
    cancelarAtendimento: function (pacientes, nomeDoCliente) {

        let nomeDoPacienteValido = false;
        let listaPacientesAtulizada = "";

        for (const paciente of pacientes) {
            if (paciente === nomeDoCliente) {
                nomeDoPacienteValido = true;

                pacientes.splice(pacientes.indexOf(paciente), 1);
                listaPacientesAtulizada = pacientes.join(", ");
                return `Paciente ${nomeDoCliente} cancelou seu atendimento.
                    Lista de Atendimento ${listaPacientesAtulizada}`;

            }
        }
        if (!nomeDoPacienteValido) {
            return `Nome do paciente não se encontra na lista`;
        }
    }
};

console.log(`Ordem de chegada: ${sistemaAtendimendo.listaAtendimento.join(", ")}`);

if (sistemaAtendimendo.tipoOperacao === `agendar`) {
    console.log(`Lista de agendamentos:`)
    console.log(sistemaAtendimendo.agendarPacientes(sistemaAtendimendo.listaAtendimento, sistemaAtendimendo.nomeDoPaciente));

} else if (sistemaAtendimendo.tipoOperacao === `atender` && (sistemaAtendimendo.pacientesAtendidos === "s" || sistemaAtendimendo.pacienteAtendido === "S")) {
    console.log(sistemaAtendimendo.atenderPaciente(sistemaAtendimendo.listaAtendimento));

} else if (sistemaAtendimendo.tipoOperacao === `atender` && (sistemaAtendimendo.pacientesAtendidos === "n" || sistemaAtendimendo.pacienteAtendido === "N")) {
    console.log(`Lista de Atendimento: ${sistemaAtendimendo.listaAtendimento.join(", ")}`);

} else if (sistemaAtendimendo.tipoOperacao === `cancelar`) {
    console.log(sistemaAtendimendo.cancelarAtendimento(sistemaAtendimendo.listaAtendimento, sistemaAtendimendo.nomeDoPaciente));

} else {
    console.log(`Tipo de operação inválida!!!`);
};


