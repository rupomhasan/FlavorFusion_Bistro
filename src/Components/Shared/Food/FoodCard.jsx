import Button from "../Menu/Button/Button";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="relative">
        <img className="w-full" src={image} alt="Shoes" />
        <span className="absolute top-3 right-3 badge p-3 border-none bg-black text-yellow-500">
          $ {price}
        </span>
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions flex justify-end">
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
