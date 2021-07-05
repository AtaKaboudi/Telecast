import './Video.css'
function Video(props) {
    let params = props.params
    return (
        <div className="videoWrapper" >
            <img src={params.thumbnails.medium.url}></img>
            <h2>{params.title}</h2>
            <p>{params.description}</p>
            <div>
                <h2>{params.channelTitle}</h2>
                <label>{params.publishTime}</label>
            </div>
        </div>
    )
}


export default Video;