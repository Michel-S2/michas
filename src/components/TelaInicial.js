import "./TelaInicial.css";
import React, { useRef, useEffect, useState } from 'react';

export const TelaInicial = ({handleSim}) => {
    const botaoRef = useRef(null)
    const [left, setLeft] = useState(null);
    const [top, setTop] = useState(null);


    useEffect(() => {
        if (botaoRef.current) {
          const largura = botaoRef.current.offsetWidth;
          console.log('Largura do botão:', largura);
        }
      }, []);

    const handleNao = () => {
        let larguraJanela = window.innerWidth;
        let alturaJanela = window.innerHeight;
        let maxLargura = larguraJanela - botaoRef.current.offsetWidth;
        let maxAltura = alturaJanela - botaoRef.current.offsetHeight;
        let aleatorioX = Math.floor(Math.random() * maxLargura);
        let aleatorioY = Math.floor(Math.random() * maxAltura);
        // botaoRef.current.style.left = `${aleatorioX}px`;
        setLeft(`${aleatorioX}px`);
        setTop(`${aleatorioY}px`);
        if (botaoRef.current) {
            const largura = botaoRef.current.offsetWidth;
            console.log('Largura do botão ao clicar:', largura);
        }
    }
    return (
        <div className="container">
            <div className="painel">
                <h1>Yasmim, aceita ir no cinema comigo?😔👉👈</h1>
                <div className="areaButton">
                    <button onClick={handleSim}>Sim</button>
                    <div className="divB">
                        <button onMouseOver={handleNao} onClick={handleNao} ref={botaoRef} className="nao" style={{ left: left, top: top }}>Não</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
