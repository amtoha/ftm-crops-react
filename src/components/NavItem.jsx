import Image from 'next/image'

const NavItem = ({ url, image, text }) => {
  return (
    <a href={url} target="_blank">
      <div className="cursor-pointer flex items-center space-x-1 hover:text-blue">
        <Image src={image} width={18} height={18} />
        <span>{text}</span>
      </div>
    </a>
  )
}

export default NavItem
