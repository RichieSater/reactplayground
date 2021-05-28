import Card from '../UI/Card'

const GameObject = (props) => {

    return(
        <Card>
            <div>Game: {props.name}</div>
            <div>Released: {props.releaseDate}</div>
        </Card>
    )
}

export default GameObject