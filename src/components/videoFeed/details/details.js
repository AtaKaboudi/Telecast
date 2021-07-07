import './details.css'
function Detail(props) {
    let params = props.params;
    console.log(params);
    return (
        <div class="detailsWrapper">
            <h1>{params.title}</h1>
        </div>
    )
}


export default Detail