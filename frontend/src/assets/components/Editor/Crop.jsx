const Crop = () => {
  return (
    <>
      <div className="flex flex-col ">
        <lable htmlFor="width"> Width </lable>
        <input
          type="number"
          id="width"
          className="bg-primary-dark  outline-none p-2 rounded-lg mt-2"
        />
      </div>

      <div className="flex flex-col ">
        <lable htmlFor="height"> Height </lable>
        <input
          type="number"
          id="height"
          className="bg-primary-dark  outline-none p-2 rounded-lg mt-2"
        />
      </div>

      <div className="flex flex-col ">
        <lable> Aspect Ratio </lable>
        <div className="flex gap-2 items-center mt-2">
          <input
            type="number"
            className="bg-primary-dark  outline-none p-2 rounded-lg w-1/3"
          />
          <p className="text-2xl">:</p>
          <input
            type="number"
            className="bg-primary-dark  outline-none p-2 rounded-lg w-1/3"
          />
        </div>
      </div>
    </>
  );
};

export default Crop;
