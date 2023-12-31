const SectionTitle = ({ title }) => {
    return (
      <div className="relative text-center mb-2">
        <h1 className="rounded-tl-xl rounded-br-xl font-semibold px-4 py-1 text-center mx-auto relative z-10 text-white bg-red-600 w-max">{title}</h1>
        <hr className="absolute w-full top-1/2 z-0" style={{ borderTop: '1px solid black' }} />
      </div>
    );
  };
  
  export default SectionTitle;
  