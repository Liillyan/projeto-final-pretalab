import {useState} from 'react'
import { Header } from "../components/Header"
import contatoImg from "../assets/contato.svg"
import { database } from '../service/firebase'
import {ref, push, set } from 'firebase/database'

import styles from "../styles/pages/contato.module.css"

export function Contato() {
    const [nome, setNome] = useState('')
    const [email, setMail] = useState('')
    const [mensagem, setMessage] = useState('')

    function handleInputName(event) {
        setNome(event.target.value)
    }

    function handleInputMail(event) {
        setMail(event.target.value)
    }

    function handleInputMessage(event) {
        setMessage(event.target.value)
    }

    function createMessage(event) {
        event.preventDefault()

        console.log('nome:', nome);
        console.log('email:', email)
        console.log('mensagem:', mensagem)

        const mensagensChild = ref(database, 'mensagens')
        const novamensagensChild = push(mensagensChild) 
        set(novamensagensChild, {
            nome: nome,
            email: email,
            texto: mensagem
        })

        setNome('');
        setMail('');
        setMessage('')
    }

    return(
        <>
        <Header text= "Contato" image={contatoImg} />
        <div className={styles.formContainer}>
            <form onSubmit={createMessage} className={styles.form}>
                <input onChange={handleInputName} placeholder="Digite seu nome" className={styles.formInput} value={nome}/>
                <input onChange={handleInputMail} placeholder="Digite seu e-mail" className={styles.formInput} value={email} />
                <textarea onChange={handleInputMessage} placeholder="Digite sua mensagem" className={styles.formTextArea} value={mensagem} />
                <button className={styles.formButton} type="submit"> Enviar Mensagem </button>
            </form>
        </div>
        </>
    )
}