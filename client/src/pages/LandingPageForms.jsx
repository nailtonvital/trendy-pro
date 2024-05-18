import React from "react";
import { useState, useEffect } from "react";
import style from "./style.module.scss";
import EnviarSubForm from "../services/subFormsApi";
import EnviarInfoForm from "../services/infoFormsApi";


export default function LandingPageForms() {

    const [subName, setSubName] = useState('');    
    const [email, setEmail] = useState('');  
    const [subOption, setSubOption] = useState('');  

    const [infoName, setInfoName] = useState('');   
    const [infoOption, setInfoOption] = useState([]);   
    
    const handleChangeOption = (event) => {
        const value = event.target.value;
        setInfoOption(prevSelectedOptions => {
            if (prevSelectedOptions.includes(value)) {
                return prevSelectedOptions.filter(option => option !== value);
            } else {
                return [...prevSelectedOptions, value];
            }
        });
    };

    const handlePostSub = async () =>{
        if (subName && email && subOption){
            await EnviarSubForm({
                name: subName,
                email: email,
                option: subOption
            })
        }else{
            alert('Preencha todos os campos!')
        }
    }

    const handlePostInfo = async () =>{
        if (infoName && infoOption){
            await EnviarInfoForm({
                name: infoName,
                option: infoOption
            })
        }else{
            alert('Preencha todos os campos!')
        }
    }

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
                            <input className={style.inpForms} onChange={(e) => setSubName(e.target.value)}></input>
                        </div>
                        <div>
                            <p className="">
                                Email *  
                            </p>
                            <input className={style.inpForms} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div>
                            <p className="mb-6">
                                Você é produtor de conteúdo?
                            </p>
                            <form className={style.multipleChoice}>
                                <label>
                                    <input
                                        type="radio"
                                        name="answer"
                                        value={'Sim, do tiktok.'}
                                        onChange={(e)=> setSubOption(e.target.value)}
                                    >    
                                    </input>
                                    <p>Sim, do tiktok.</p>
                                </label>
                                <label>
                                    <input 
                                        type="radio"
                                        name="answer"
                                        value={'Sim, do instagram.'}
                                        onChange={ (e)=> setSubOption(e.target.value)}
                                    >    
                                    </input>
                                    <p>Sim, do instagram.</p>
                                </label>
                                <label>
                                    <input 
                                        type="radio"
                                        name="answer"
                                        value={'Não.'}
                                        onChange={ (e)=> setSubOption(e.target.value)}
                                    >    
                                    </input>
                                    <p>Não.</p>
                                </label>
                            </form>
                        </div>
                        <button onClick={()=>{handlePostSub()}}>
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
                            <input className={style.inpForms} onChange={(e)=> setInfoName(e.target.value)}></input>
                        </div>
                        <div>
                            <p className="mb-6">
                                Você é produtor de conteúdo?
                            </p>
                            <form className={style.multipleChoice}>
                                <label>
                                    <input 
                                        type="checkbox" name="answer" 
                                        value={'Gerar Ideias Criativas'}
                                        checked={infoOption.includes("Gerar Ideias Criativas")}
                                        onChange={handleChangeOption}
                                    ></input>
                                    <p>Gerar Ideias Criativas</p>
                                </label>
                                <label>
                                    <input type="checkbox"
                                    name="answer"
                                    value={'Tempo e Gestão de Tarefas'}
                                    checked={infoOption.includes('Tempo e Gestão de Tarefas')}
                                    onChange={handleChangeOption}
                                ></input>
                                    <p>Tempo e Gestão de Tarefas</p>
                                </label>
                                <label>
                                    <input type="checkbox"
                                    name="answer"
                                    value={'Equipamento e Recursos Técnicos'}
                                    checked={infoOption.includes('Equipamento e Recursos Técnicos')}
                                    onChange={handleChangeOption}
                                ></input>
                                    <p>Equipamento e Recursos Técnicos</p>
                                </label>
                                <label>
                                    <input type="checkbox"
                                    name="answer"
                                    value={'Engajamento da Audiência'}
                                    checked={infoOption.includes('Engajamento da Audiência')}
                                    onChange={handleChangeOption}
                                ></input>
                                    <p>Engajamento da Audiência</p>
                                </label>
                                <label>
                                    <input type="checkbox"
                                    name="answer"
                                    value={'Consistência e Regularidade'}
                                    checked={infoOption.includes('Consistência e Regularidade')}
                                    onChange={handleChangeOption}
                                ></input>
                                    <p>Consistência e Regularidade</p>
                                </label>
                            </form>
                        </div>
                        <button onClick={()=>{handlePostInfo()}}>
                            Enviar
                        </button>
                    </div>
                </div>
            </div>

            
        </>
    )

}