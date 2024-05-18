import React, { useState } from "react";
import style from "./style.module.scss";


export default function LandingPageForms() {

    return(
        <>  
            <div className={style.formsContainer}>
                <div className={style.titleDiv}>
                    <h1>
                        Seja o primeiro a testar
                    </h1>
                    <h2>
                        O App está em versões finais para ser lançado. Que tal ser um dos primeiros a experimentar as tendências?
                    </h2>
                </div>
                <div>
                    <div className={style.formsDiv}>
                        <div>
                            <p className="">
                                Nome *  
                            </p>
                            <input className={style.inpForms}></input>
                        </div>
                        <div>
                            <p className="">
                                Email *  
                            </p>
                            <input className={style.inpForms}></input>
                        </div>
                        <div>
                            <p className="mb-6">
                                Você é produtor de conteúdo?
                            </p>
                            <form className={style.multipleChoice}>
                                <label>
                                    <input type="radio" name="answer" value="A"></input>
                                    <p>Sim, do tiktok.</p>
                                </label>
                                <label>
                                    <input type="radio" name="answer" value="A"></input>
                                    <p>Sim, do instagram.</p>
                                </label>
                                <label>
                                    <input type="radio" name="answer" value="A"></input>
                                    <p>Não.</p>
                                </label>
                            </form>
                        </div>
                        <button>
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.formsContainer}>
                <div className={style.titleDiv}>
                    <h1>
                        Que tal nos ajudar?
                    </h1>
                    <h2>
                        Queremos ouvir os nossos clientes, quais são as suas principais dores na hora de criar o conteúdo?
                    </h2>
                </div>
                <div>
                    <div className={style.formsDiv}>
                        <div>
                            <p className="">
                                Nome *  
                            </p>
                            <input className={style.inpForms}></input>
                        </div>
                        <div>
                            <p className="mb-6">
                                Você é produtor de conteúdo?
                            </p>
                            <form className={style.multipleChoice}>
                                <label>
                                    <input type="checkbox" name="answer" value="A"></input>
                                    <p>Gerar Ideias Criativas</p>
                                </label>
                                <label>
                                    <input type="checkbox" name="answer" value="A"></input>
                                    <p>Tempo e Gestão de Tarefas</p>
                                </label>
                                <label>
                                    <input type="checkbox" name="answer" value="A"></input>
                                    <p>Equipamento e Recursos Técnicos</p>
                                </label>
                                <label>
                                    <input type="checkbox" name="answer" value="A"></input>
                                    <p>Engajamento da Audiência</p>
                                </label>
                                <label>
                                    <input type="checkbox" name="answer" value="A"></input>
                                    <p>Consistência e Regularidade</p>
                                </label>
                            </form>
                        </div>
                        <button>
                            Enviar
                        </button>
                    </div>
                </div>
            </div>

            
        </>
    )

}