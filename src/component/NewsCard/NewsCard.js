import './NewsCard.css'
const NewsCard = ({author,content,description,publishedAt,title,url,urlToImage}) => {
    return(
        <>
         <div className='news-artical-cards'>
            <img src={urlToImage} alt="...."  className='news-img'/>
             <p className='new-title'>{title}</p>
           
             <div className='artical-info'>
             <p className='new-author'> {author} </p>
             <p className='new-publish'>{publishedAt}</p>
             </div>
             <span>{description} </span> &nbsp;
             <a href={url} target='_blank' className='btn-read-more'>Read More.. </a>
         </div>
        </>
    )

}

export default NewsCard;