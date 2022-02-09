export default function SubPageCard(props) {
    return (
        <div className="col-sm-3 d-flex align-items-stretch mb-5 mb-sm-0">
            <div className="card">
                <img className="card-img-top" src={props.img} alt={props.name}/>
                <div className="card-body text-center">
                    <p className="card-text">{props.description}</p>
                    <a href={props.link} className="btn btn-primary">{props.name}</a>
                </div>
            </div>
        </div>
    )
}