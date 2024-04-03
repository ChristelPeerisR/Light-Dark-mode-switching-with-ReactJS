import React, { useRef } from "react";
import "./Menu.css";
import next from "../../assets/next-icon.png";
import back from "../../assets/back-icon.png";
import menu1 from "../../assets/menu1.jpg";
import menu2 from "../../assets/menu2.jpg";
import menu3 from "../../assets/menu3.jpg";
import menu4 from "../../assets/menu4.jpg";

const Menu = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div id="menu" className="menu">
      <img src={next} alt="" className="next-btn" onClick={slideForward} />
      <img src={back} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user">
                <img src={menu1} alt="" />
                <div className="cap">
                  <h4>CHEESY CHICKEN CRISPANADA</h4>
                  <p>
                    We packed the Cheesy Chicken Crispanada <br />
                    to the brim with pure deliciousness.
                  </p>
                  <button className="menubtn">Order Now</button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user">
                <img src={menu2} alt="" />
                <div className="cap">
                  <h4>CRAVE THIS MENU FOR LESS</h4>
                  <p>
                    Fill up on items for $3 or less each when you <br />
                    order off the new Cravings Value Menu.
                  </p>
                  <button className="menubtn">Explore Menu</button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user">
                <img src={menu3} alt="" />
                <div className="cap">
                  <h4>BUILD YOUR OWN CRAVINGS BOX</h4>
                  <p>
                    Fill veggie crowd-pleasers with choice of a <br />
                    specialty, classic, side, and medium drink.
                  </p>
                  <button className="menubtn">Build Yours</button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user">
                <img src={menu4} alt="" />
                <div>
                  <h4>CRAVE THIS MENU FOR LESS</h4>
                  <p>
                    Fill up on items for $3 or less each when you <br />
                    order off the new Cravings Value Menu.
                  </p>
                  <button className="menubtn">Explore Menu</button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
