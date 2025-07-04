const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#1a1a2e] text-white py-12">
      <p className="text-md">
        © {new Date().getFullYear()} DevNetX. All rights reserved.
      </p>
      <p className="text-md">
        Made with <span className="text-red-500">♥</span> by Luffy
      </p>
    </div>
  );
};

export default Footer;
