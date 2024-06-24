const Footer = () => {
  return (
    <footer className="flex flex-row justify-between items-center bg-jh1 text-white py-4 px-8 ">
      <div className="space-x-96 flex flex-row items-center">
      <span className="text-lef tw-24 bg-jh1 text-white p-4 text-2xl font-bold">JHFLIX</span> 
      </div>

      <div className="items-center">
        <p className="text-right bg-jh1 text-white flex end-full">JHFLIX © 2023. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
