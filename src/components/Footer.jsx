import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { useEffect, useState } from 'react';

export default function Footer() {
    const [showMenu, setShowMenu] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setShowMenu(prevScrollPos > currentScrollPos || currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos)
        }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    })

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }


    
    return(
        <div className={`Footer ${showMenu ? 'show' : 'hide'}`}>
            <div className='btn-container'>
            <button onClick={toggleMenu} className="btn-footer">
                {showMenu ? <ArrowCircleDownIcon fontSize='large' /> : <ArrowCircleUpIcon fontSize='large' /> }
                
                </button>
            </div>
            <div className='mt-5'>
                <ul className='list-container'>
                    <li>
                        Hello
                    </li>
                    <li>
                        About me
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    )
}