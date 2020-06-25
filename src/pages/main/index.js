import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import "./style.scss";
const Main = () =>{
    const [artigos, setArtigos] = useState([]);
 useEffect(()=>{
    api.get('everything',{
       params:
       { 
            q: 'javascript',
            from:'2020-04-27',
            sortBy:'publishedAt',
            apiKey:'eda171d29cca41568a2966a02be36493'
        }
    }).then(response =>{
        const { articles } = response.data;
        setArtigos(articles);
    }).catch(error=>{
        console.error(error);
    })
 },[]);

 return (
    <div id="item-artigos">
        {
        artigos.map(item=>(
                <article key={parseInt( Math.random()*1000)} className="product-list">
                    <strong className="product-list" key={parseInt( Math.random()*1000)}>{item.author}</strong>
                </article>
                )
        )
        }
        <Link to="/artigo/4" >Navegar</Link>
        <div>
            <span> teste de scss </span>
        </div>
       
    </div>
 );
}
export default Main;