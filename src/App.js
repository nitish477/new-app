import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import NewsCard from './component/NewsCard/NewsCard';

function App() {
const [news,setNews]=useState([]);
const [search,setSearch]=useState('pune')

  
 const loadNews =async ()=>{
   try{
    
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${search}&from=2023-10-07&to=2023-10-07&sortBy=popularity&apiKey=d79fb9375c1e4bdaabe609587eb42cd8`)
    setNews(response.data.articles)
    console.log(response.data.articles)
   }catch(err){
    console.log(err.massage)
   }
 }

 useEffect(()=>{
  loadNews();
 },[])
 useEffect(()=>{
  loadNews();
 },[search])


  return (
    <>  
    <h1>New App</h1>

    <input 
    placeholder='Search' 
    value={search}
    type='text'
    onChange={(e)=>{setSearch(e.target.value)}}
    className='new-input'
    />

     <div className='new-contanier'>
         {
          news.map((news,index)=>{
          const  {author,content,description,publishedAt,title,url,urlToImage}=news
            return<NewsCard 
            key={index} 
            title={title} 
            urlToImage={urlToImage} 
            author={author} 
            publishedAt={publishedAt} 
            description={description}
            url={url}
            />;
          })
         }
     </div>
   
    </> 
  )
}

export default App;
