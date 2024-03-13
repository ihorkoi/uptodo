export const ButtonFilled = ({ value }) => {
  return (
    <button className="w-[320px] border-[#8875FF] mb-[28px] text-white bg-[#8875FF] hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded">
      {value}
    </button>
  );
};
