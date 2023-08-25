import catArray from "./data";
const Cards = () => {
  const { name, img, url, description } = data;

  return (
    <div>
      <img src={img}>{img}</img>
      <h3>{name}</h3>
      <h5>{url}</h5>
      <p>{description}</p>
    </div>
  );
};
