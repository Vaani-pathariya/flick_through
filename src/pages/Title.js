import "./post.css"
import img from "../book.webp"
const Title=()=>{
    return (
        <div className="post-format">
        <div className="post">
            <h1>Title</h1>
            <div className="h4-flex">
            <h4>Author</h4><h4>date</h4><h4>time</h4>
            <h4>genre</h4>
            </div>
            <h2>Summary</h2>
            <h2>Evaluation</h2>
            <h2>Reccomendation</h2>
            <h3>Rating:</h3>
        </div>
        <div className="post-img">
            <img src={img}></img>
        </div>
        </div>
    )
}
export default Title;