import './PostCard.css'

function PostCard(props){

 return(
    <div className="postcard-sec">
         <img src={props.image} alt="img"></img>
         <h3>{props.title}</h3>
         <div>{props.author}</div>
    </div>
 )
}

export default PostCard;