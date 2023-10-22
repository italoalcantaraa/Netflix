import './App.scss';
import Fonte from '../pages/fonte/index.css'
import { useState } from 'react';
import axios from 'axios';
import Friens from '../assets/images/Icon.png';
import Lupa from '../assets/images/Lupa.png';
import Notificacao from  '../assets/images/notificaçoes.png'
import Perfil from '../assets/images/perfil.png';
import Seta from '../assets/images/seta.png';




export default function Netflix(){
    const [filme, setFilme] =  useState('');
    const [result, setRresult] = useState([]);


    async function ChamarFilme(){
        let url = ` http://www.omdbapi.com/?apikey=12c9518c&s=${filme}`;

        let response = await axios.get(url);

        setRresult(response.data.Search);
    }
    return(
        <div className='container-app'>   
           <div className='conteudo'>
           <div className='cabecalho'>
                <div>
                    <img src={Friens}/>
                    <h1>Portifolio.me</h1>
                    <a>Início</a>
                    <a>Séries</a>
                    <a>Filmes</a>
                    <a>Bombando</a>
                    <a>Minha Lista</a>
                </div>
                <div className='pesquisa'>
                <div>
                    <input placeholder='Pesquise pelo Título'
                     type='text'
                     value={filme}
                      onChange={(e) => setFilme(e.target.value)}/>
                    <img src={Lupa}
                    onClick={ChamarFilme}/>
                </div>
                <p>Bruno</p>
                <img src={Notificacao}/>
                <img src={Perfil}/>
                <img src={Seta}/>

                </div>
                
           </div>
            <div className='descricao2'>
                <p id='titulo'>Friens</p>
                <p>Seis jovens são unidos por laços familiares, românticos e, principalmente, de amizade, enquanto tentam vingar em Nova York.</p>
                <button>Assitir</button>
            </div>
            </div>
            <div className='resposta'>
            <ul>
                    {result.map((item) =>(
                    <div id='filmes'>
                       <img src={item.Poster}/>
                    </div> 
                    ))}
            </ul>

            </div>
           
        </div>
    )
}