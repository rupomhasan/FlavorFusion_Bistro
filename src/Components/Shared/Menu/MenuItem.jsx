const MenuItem = ({ item }) => {
  const { name, image, recipe } = item;

    return (
      
    <div className="flex gap-5 items-center">
      <div>
        <img
          className="min-w-32 max-w-32 rounded-b-full rounded-r-full"
          src={image}
          alt=""
        />
      </div>
      <div>
        <h3 className="text-xl font-bold uppercase">{name}_ _ _</h3>
        <p className="text-sm text-gray-500">{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
