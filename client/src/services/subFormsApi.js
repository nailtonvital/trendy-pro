import axios from "axios";

export default async function EnviarSubForm(props){
    const data = {
        name: props.name,
        email: props.email,
        option: props.option,
    };

    await axios.post(
        'https://trendy-forms-api.onrender.com/subForms/', data)

    .then(response => {
        alert('Enviado com sucesso! Muito Obrigado!');
    })
    .catch(error => {
        console.error('Erro: ', error);
        alert('Erro no servidor. Tente mais tarde')
    });
}
