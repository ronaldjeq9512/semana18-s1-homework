import React, { useState } from 'react';
import { Error } from './Error';

interface FormProps {
    onSubmit: (name: string, author: string, date: string, onSuccess: () => void) => Promise<void>;
    loading: boolean;
    error: boolean;
}

export const Form = ({onSubmit, loading, error}: FormProps) => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
   
    const onSuccess = () => {
        setName('');
        setAuthor('');
        setDate('');
    }
    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(name, author, date, onSuccess);
    }

    return (
        <form action="" onSubmit={submitForm}>
            <div>
                <h2>Ingrese campos</h2>
            </div>
            <div>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nombre" />
            </div>
            <div>
                <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Author" />
            </div>
    
            <div>
                <input value={date} onChange={(e) => setDate(e.target.value)} type="date" />
            </div>
 
            <button disabled={loading} type="submit">Agregar Task</button>
            {loading && (
                    <p>Creando tarea ...</p>
                )
            }
            {error && (
                <Error message='No se pudo crear Tarea' />
                )   
            }
        </form>
    );
};
