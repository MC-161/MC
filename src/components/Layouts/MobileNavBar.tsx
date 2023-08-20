import logo from '../../assets/M.svg';
import { ClickHandler } from '../../types/types';

export default function MobileNavBar() {
  const handleClick: ClickHandler = () => {
  };

  return (
    <div className="nav h-20 bg-black flex justify-between items-center">
      <img className='w-12 pl-2' src={logo} alt="" />
      <button onClick={handleClick} className='bg-black p-2 border-2 border-[rgb(126,225,102)] text-[rgb(126,225,102)] font-serif'>My Resume</button>
    </div>
  );
}
