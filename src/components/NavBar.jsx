import { useState, useEffect } from "react";

export default function NavBar() {
    const [show, handleShow] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(
          (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
            currentScrollPos < 10
        );
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos, visible]);

    const showMenu = () => {
        if (!show) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

     return(
        <div className={`fixed top-0 ${visible ? 'NavBar' : 'NavBar NavBar--transparent'}`}>
            <div>
                <span className="flex justify-between gap-3">
                <h2 className={`${visible ? 'h2 mt-1 ml-3 font-semibold' : 'hidden'}`}>Jonathan Dev</h2>
                <button onClick={showMenu} className="MenuButton mr-3 mt-2">Menu</button>
                </span>
                {show && (
                    <div className="Menu flex items-center flex-col">
                        <p>About me</p>
                        <p>Contact</p>
                        <p>Projects</p>
                    </div>
                )}
            </div>
        </div>
    )
}