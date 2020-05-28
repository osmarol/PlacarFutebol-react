import React from 'react';

// Cria a classe Botão:
export default class BotaoGol extends React.Component {

    handleClick(e) { // Método que usa como parâmetro um object event: e
        e.preventDefault(); // Método cancelar o comportamento padrão do evento.
        this.props.marcarGol(); // Acessa propriedades e métodos.S
    } 

    render() { // renderizar
        return ( // renderiza o conteúdo
            // Cria um botão com evento de click no JSX.
            <button className="BtGol" onClick={this.handleClick.bind(this)}>Golaço</button>
        );
    }
} 