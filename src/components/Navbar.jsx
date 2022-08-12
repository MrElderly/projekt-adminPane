import React, {useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar5 from '../data/avatar5.jpg'
import { useStateContext } from '../contexts/ContextProvider'
import { Cart, Chat, Notification, UserProfile } from '.'


const NavButton = ({title, customFunc, icon, color,
   dotColor}) => (
    <TooltipComponent content={title} position="BottomCenter">
      <button type="button" onClick={customFunc} style={{color}}
      className={`relative text-xl rounded-full p-3 hover:bg-light-gray`}>
       
        <span style={{backgroundColor: dotColor}} className="absolute inline-flex
        rounded-full h-2 w-2 right-2 top-2"> {icon}</span>
       
      </button>
    </TooltipComponent>
   )

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
  return (
    <div className="flex justify-between p-1 md:mx-2 relative ">
   <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
    icon={<AiOutlineMenu />} color="blue"/>

<div className="flex ">
  <NavButton 
  title="Cart" 
  customFunc={() => handleClick("cart")}
  color="blue" icon={<FiShoppingCart />}
  />
   <NavButton 
  title="Chat" 
  dotColor="#03C9D7"
  customFunc={() => handleClick("cart")}
  color="blue" icon={<BsChatLeft />}
  />
   <NavButton 
  title="Notifications" 
  dotColor="#03C9D7"
  customFunc={() => handleClick("notification")}
  color="blue" icon={<RiNotification3Line />}
  />
  <TooltipComponent content="Profile" position="BottomCenter">
 <div className="flex items-center gap-2 cursor-pointer p-1
  hover:bg-light-gray rounded-lg" onClick={() => handleClick("userProfile")}>
    <img src={avatar5} alt="avatar" className="w-8 h-8 rounded-full" />
    <p>
      <span className="text-gray-500">Hi, </span> 
      <span className="text-gray-500  ">Elderly</span>
    </p>
    <MdKeyboardArrowDown className="text-gray-500" />
  </div>
  </TooltipComponent>
  {isClicked.cart && <Cart />}
  {isClicked.chat && <Chat />}
  {isClicked.notification && <Notification />}
  {isClicked.userProfile && <UserProfile />}
  </div>
    </div>
  )
}

export default Navbar