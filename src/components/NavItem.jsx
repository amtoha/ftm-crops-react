const NavItem = ({ url, image, text }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="cursor-pointer flex items-center space-x-1 hover:text-blue">
        <img src={image} className="w-[18px] h-[18px]" alt="icon" />
        <span>{text}</span>
      </div>
    </a>
  );
};

export default NavItem;
