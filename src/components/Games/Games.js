import GameObject from "./GameObject"

const Games = (props) => {
  return (
    <div>
      <GameObject name={props.games[0].name} releaseDate={props.games[0].releaseDate} />
      <GameObject name={props.games[1].name} releaseDate={props.games[1].releaseDate} />
    </div>
  );
};

export default Games;
