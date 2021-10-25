import { useHistory } from 'react-router'
import * as C from './styles'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const FormStep3 = () => 
{
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() =>
    {
        if(state.name === '')
        {
            history.push('/');
        }
        else
        {
            dispatch(
            {
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
    }, []);

    const handleNextStep = () => 
    {
        if(state.email !== '' && state.github !== '')
        {
            console.log(state);
        }
        else
        {
            alert("Preencha os dados")
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => 
    {
        dispatch(
        {
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => 
    {
        dispatch(
        {
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    const setLevel = (level: number) => 
    {
        dispatch(
        {
            type: FormActions.setLevel,
            payload: level
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, aonde te encontramos ?</h1>
                <p>Preencha com seus contatos para conseguimos entrar em contato</p>

                <hr />

                <label>
                    Qual seu e-mail ?
                    <input type="email" value={state.email} onChange={handleEmailChange} />
                </label>

                <label>
                    Qual seu github ?
                    <input 
                    type="url" 
                    value={state.github} 
                    onChange={handleGithubChange} 
                    placeholder="Coloque a url do seu perfil" />
                </label>

                <Link className="backButton" to="/step2">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    )
}