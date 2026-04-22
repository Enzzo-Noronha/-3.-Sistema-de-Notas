function adicionarNota() {
    const card = document.getElementById('card');
    card.style.display = 'flex';
}

function fecharNota() {
    const card = document.getElementById('card');
    card.style.display = 'none';
}

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const disciplina = document.getElementById('disciplina').value;
    const nota = Number(document.getElementById('nota').value);

    if (!nome || !disciplina || isNaN(nota)) {
        alert('Preencha todos os campos corretamente.');
        return;
    }

    const tabela = document.getElementById('tabela');
    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${nome}</td>
        <td>${disciplina}</td>
        <td>${nota}</td>
        <td>
            <div class="btn-acoes">
                <button class="btn-editar">Editar</button>
                <button class="btn-deletar">Excluir</button>
            </div>
        </td>

    `;

    tabela.appendChild(tr);

    form.reset();
    fecharNota();
});