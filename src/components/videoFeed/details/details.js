import './details.css'
function Detail(props) {
    let params = props.params;
    console.log(params);
    function trimDate(date) {
        if (date) return date.slice(0, 10);
        return ''
    }
    return (
        <div class="detailsWrapper">
            <div className="title">
                <h1>{params.title}</h1>
                <h2>{params.channelTitle}</h2>
                <p>{params.description}</p>
            </div>
            <div className="stats">
                <div>
                    <span className="material-icons"> visibility <h2>{params.viewCount} </h2></span>
                    <span className="material-icons"> favorite <h2>{params.likeCount} </h2></span>
                    <span className="material-icons"> close <h2>{params.dislikeCount} </h2></span>
                </div>
                <div className="statsRow2">
                    <h2>{trimDate(params.publishedAt)}</h2>
                </div>

            </div>
        </div>
    )
}


export default Detail