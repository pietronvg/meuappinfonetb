export default function Atendentes(){
    return (
        <div>
            <h1>Atendentes</h1>
            <form>
                <h1>Cadastro de um novo atendente</h1>
                <input type="text" className="" name=""/>
                <br/>
                <button >Salvar</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>3</td>
                        <td>Fernecão</td>
                        <td>55 14 998231792</td>
                        <td>
                            <button>Editar</button>
                            <button>Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}