const Nisser = () => {
  return (
    <form className="flex justify-center flex-col w-max h-max bg-red-500 p-5 rounded-lg" action="numOfNisser">
      <label for="nisser">Vælg antal nisser 1-10</label>
      <input className="text-black" type="number" id="nisser" name="nisser" />
      <input type="submit" />
    </form>
  );
};

export default Nisser;
