import { useState, useEffect } from "react";

export default function NavBar() {
  

     return(
        <div className="">
            <div>
                <span className="flex justify-between gap-3">
                <h2 className="">Jonathan Dev</h2>
                <button className="MenuButton mr-3 mt-2">Menu</button>
                </span>
                    <div className="Menu flex items-center flex-col">
                        <p>About me</p>
                        <p>Contact</p>
                        <p>Projects</p>
            </div>
        </div>
        </div>
    )
}