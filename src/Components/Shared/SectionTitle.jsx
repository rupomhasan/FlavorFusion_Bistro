const SectionTitle = ({ subheading, heading }) => {
  return (
    <div className="my-10">
      <p className="text-yellow-500 text-xl text-center font-bold">
        - - - {subheading} - - -
      </p>
      <h3 className="text-5xl font-bold mx-auto border-y-4 w-fit  py-2 my-3  ">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
