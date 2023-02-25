import { useParams } from "react-router-dom";

const Details = () => {
  let { name } = useParams();

  return <div>{name}</div>;
};

export default Details;
