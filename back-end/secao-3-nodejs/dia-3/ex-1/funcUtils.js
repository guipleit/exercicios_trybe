const retornaAprovação = (nota) => {
    if (nota >= 7) {
        return 'Aprovado';
    }
    return 'Reprovado';
}

module.exports = retornaAprovação;