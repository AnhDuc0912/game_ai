import React, { Component } from "react";
import "./Character.css";


export default class MainCharacter extends Component {
  render() {
    return (
      <div class="container">
        <div class="birds-container">
           <svg height="25" width="25" viewBox="0 0 400 400">
            <path
              d="M110 150 290 150 350 290 50 290 z"
              stroke="#d1212a"
              fill="#d1212a"
            />
            <path
              d="M110 150 C 155 105, 245 105, 290 150"
              stroke="black"
              fill="#d1212a"
            />
            <path
              d="M110 150 C 70 190, 50 240, 50 290"
              stroke="black"
              fill="#d1212a"
            />
            <path
              d="M290 150 C 330 190, 350 240, 350 290"
              stroke="black"
              fill="#d1212a"
            />
            <path
              d="M50 290 C 50 430, 350 430, 350 290"
              stroke="black"
              fill="#d1212a"
            />

            <path
              d="M160 130 C 70 130, 100 70, 230 110"
              stroke="black"
              fill="#d1212a"
            />
            <path
              d="M190 113 C 70 40, 210 20, 262 131"
              stroke="black"
              fill="#d1212a"
            />
            <path
              d="M50 290 C 70 275, 80 325, 55 320"
              stroke="transparent"
              fill="#a82023"
            />
            <path
              d="M50 290 C 50 300, 53 315, 55 320"
              stroke="black"
              fill="#a82023"
            />
            <path
              d="M350 290 C 330 275, 320 325, 345 320"
              stroke="transparent"
              fill="#a82023"
            />
            <path
              d="M350 290 C 350 300, 347 315, 345 320"
              stroke="black"
              fill="#a82023"
            />
            <ellipse
              rx="12"
              ry="25"
              cx="92"
              cy="282"
              transform="rotate(175 92 282)"
              stroke="transparent"
              fill="#a82023"
            />
            <ellipse
              rx="12"
              ry="25"
              cx="308"
              cy="282"
              transform="rotate(185 308 282)"
              stroke="transparent"
              fill="#a82023"
            />
            <ellipse
              rx="40"
              ry="45"
              cx="155"
              cy="268"
              transform="rotate(40 155 268)"
              stroke="transparent"
              fill="#a82023"
            />
            <ellipse
              rx="40"
              ry="45"
              cx="242"
              cy="268"
              transform="rotate(-40 242 268)"
              stroke="transparent"
              fill="#a82023"
            />
            <circle cx="167" cy="252" r="32" stroke="black" fill="#dcdad9" />
            <ellipse
              cx="166"
              cy="250"
              rx="26"
              ry="31.5"
              transform="rotate(110 166 251)"
              stroke="transparent"
              fill="#f8f8f8"
            />
            <path
              d="M135 252 C 138 209, 196 209, 199 252"
              transform="rotate(10 167 252)"
              stroke="black"
              fill="#f8f8f8"
            />
            <circle
              id="leftPupile"
              cx="150"
              cy="247"
              r="10"
              stroke="black"
              fill="#1f1915"
            />
            <ellipse
              id="leftPupileInner"
              cx="165"
              cy="245"
              rx="1.5"
              ry="2"
              stroke="transparent"
              fill="#f8f8f8"
            />
            <circle cx="231" cy="252" r="32" stroke="black" fill="#dcdad9" />
            <ellipse
              cx="232"
              cy="250"
              rx="26"
              ry="31.5"
              transform="rotate(-110 232 251)"
              stroke="transparent"
              fill="#f8f8f8"
            />
            <path
              d="M199 252 C 202 209, 260 209, 263 252"
              transform="rotate(-10 231 252)"
              stroke="black"
              fill="#f8f8f8"
            />
            <circle
              id="rightPupile"
              cx="215"
              cy="247"
              r="9"
              stroke="black"
              fill="#1f1915"
            />
            <ellipse
              id="rightPupileInner"
              cx="212"
              cy="245"
              rx="1.5"
              ry="2"
              stroke="transparent"
              fill="#f8f8f8"
            />
            <path
              d="M113 190 206 210 206 230 113 230 z"
              transform="rotate(10 157.5 190)"
              stroke="#1f1916"
              fill="#1f1916"
            />
            <path
              d="M192 210 282 190 282 230 192 230 z"
              transform="rotate(-10 239.5 190)"
              stroke="#1f1916"
              fill="#1f1916"
            />
            <path
              d="M100 370 C 150 260, 250 260, 300 370"
              stroke="black"
              fill="#e5caae"
            />
            <path
              d="M100 370 C 160 405, 240 405, 300 370"
              stroke="black"
              fill="#e5caae"
            />
            <path
              d="M158 305 C 200.5 360, 200.5 360, 243 305 "
              fill="#ed9d21"
              stroke="black"
            />
            <path
              d="M148 302 C 200 245, 200 245, 253 302"
              stroke="black"
              fill="#f5bb19"
            />
            <path
              d="M148 302 L200.5 320 L253 302 "
              fill="#f5bb19"
              stroke="black"
            />

            {/* <animate
                xlink:href="#leftPupile"
                attributeName="cx"
                from="175"
                to="185"
                dur="4s"
                values="150; 185; 185; 150; 150"
                keyTimes="0; 0.20; 0.50; 0.7; 1"
                repeatCount="indefinite"
                fill="freeze"
              />
              <animate
                xlink:href="#leftPupileInner"
                attributeName="cx"
                from="145"
                to="192"
                dur="4s"
                values="145; 192; 192; 145; 145;"
                keyTimes="0; 0.20; 0.50; 0.7; 1"
                repeatCount="indefinite"
                fill="freeze"
              />
              <animate
                xlink:href="#rightPupile"
                attributeName="cx"
                from="221"
                to="247"
                dur="4s"
                values="215; 247; 247; 215; 215"
                keyTimes="0; 0.20; 0.50; 0.7; 1"
                repeatCount="indefinite"
                fill="freeze"
              />
              <animate
                xlink:href="#rightPupileInner"
                attributeName="cx"
                from="210"
                to="253"
                dur="4s"
                values="210; 253; 253; 210; 210;"
                keyTimes="0; 0.20; 0.50; 0.7; 1"
                repeatCount="indefinite"
                fill="freeze"
              /> */}
          </svg> 
        </div>
      </div>
    );
  }
}
