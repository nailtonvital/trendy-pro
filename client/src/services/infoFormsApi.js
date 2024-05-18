import axios from "axios";

export default async function EnviarInfoForm(props){
    const data = {
        name: props.name,
        option_list: props.option,
    };

    await axios.post(
        'https://trendy-forms-api.onrender.com/infoForms/', data)

    .then(response => {
        alert('Enviado com sucesso! Muito Obrigado!');
    })
    .catch(error => {
        console.error('Erro: ', error);
        alert('Erro no servidor. Tente mais tarde')
    });
}
