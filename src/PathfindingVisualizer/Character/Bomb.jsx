import React, { Component } from "react";

import "./Character.css";

export default class Bomb extends Component {
  render() {
    return (
      <>
        <svg
          width="25"
          height="25"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          class="iconify iconify--twemoji"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fill="#66757F"
            d="M12 4.157s4-1.075 5-1.075s5 1.075 5 1.075s4 4.298 5 4.298c0 0 2 0 4 2.149s2 6.447 2 6.447s2 4.298 2 6.447s-1 4.298-2 5.373c-1 1.075-5 2.149-5 2.149s-1 2.149-3 3.224c-6 1.075-10 0-10 0l-2-2.149S6 31.02 5 31.02s-4-4.298-4-5.373c0-1.075 0-4.298 1-7.522c2-3.224 3-4.298 3-4.298S4 11.679 5 9.53c2-2.149 6-3.224 6-3.224l1-2.149z"
          ></path>
          <path
            fill="#99AAB5"
            d="M12.409 4.49s3.633-1.021 4.574-1.021c.941 0 4.99 1.149 4.99 1.149s3.574 4.022 4.515 4.022c0 0 2.038-.045 3.921 1.979s1.708 5.617 1.708 5.617S34 20.282 34 22.305s-.941 4.047-1.882 5.059c-.941 1.012-4.706 2.023-4.706 2.023s-.941 2.023-2.824 3.035c-5.647 1.012-9.412 0-9.412 0l-1.882-2.023s-6.588-1.012-7.529-1.012S2 25.34 2 24.328c0-1.012 0-4.047.941-7.082C4.824 14.211 5.765 13.2 5.765 13.2s-1.188-1.643-.247-3.667C7.4 7.51 11.399 6.469 11.399 6.469l1.01-1.979z"
          ></path>
          <path
            fill="#CCD6DD"
            d="M12.771 5.312s3.398-.892 4.278-.892c.88 0 4.667 1.003 4.667 1.003s3.342 3.511 4.222 3.511c0 0 1.906-.039 3.667 1.727c1.76 1.766 1.598 4.903 1.598 4.903s.275 4.245.988 4.373c1.81.324.167 3.713-.713 4.596s-7.01 1.277-7.01 1.277s.216 2.755-1.545 3.639c-5.281.883-7.565.246-7.565.246l-1.76-1.766s-4.29-4.097-5.17-4.097s-5.393-.319-5.393-1.202s0-3.533.88-6.182c1.76-2.649 2.641-3.533 2.641-3.533s-1.111-1.435-.231-3.201c1.76-1.766 5.5-2.675 5.5-2.675l.946-1.727z"
          ></path>
          <path
            fill="#99AAB5"
            d="M6.29 12.597l3.981 1.851l-2.08 1.468l-4.274.532z"
          ></path>
          <path
            fill="#66757F"
            d="M1.597 21.981s1.129 3.766 1.426 4.213s4.099.128 4.574.128c.475 0 2.792 1.213 2.792 1.213s-3.089.83-4.158.702c-1.069-.128-3.848-.627-4.099-1.341s-.535-4.915-.535-4.915z"
          ></path>
          <path
            fill="#E1E8ED"
            d="M7.3 9.597c.49-.155 3.861-1.596 4.574-1.532c.713.064 3.743 1.787 3.03 2.362s-4.634.128-5.762.128S6.29 9.916 7.3 9.597zm-2.376 7.724c.303-.571 4.337-.766 4.337-.766s5.228 2.107 5.228 2.426s-4.752 2.49-5.228 2.553s-4.575-3.766-4.337-4.213zm11.703 3.894c-.094-.505 2.02-3.575 2.436-3.83c.416-.255 6-1.724 6.95-1.724s3.98 2.234 4.04 2.681c.059.447-2.673 3.511-3.386 3.766c-.713.256-9.862.064-10.04-.893zm5.347-8.427c-.225.537 5.347 1.277 5.941 1.021c.594-.255 1.663-1.979 1.485-2.426c-.178-.447-1.901-1.724-2.792-1.596c-.892.129-4.1 1.725-4.634 3.001zm-4.396-7.851c.498.107 3.802.894 4.218 1.532s-1.96 2.617-2.614 2.681c-.653.064-5.109-2.681-5.584-3s3.088-1.405 3.98-1.213z"
          ></path>
          <path
            fill="#66757F"
            d="M13.063 31.364c-.416-.638.238-2.745.594-2.49s1.426 1.021 1.485 1.66c.059.638 1.129 1.851 1.901 2.234s4.99.383 5.703.128c.713-.255 2.376-1.66 2.792-2.49s.896-.891 1.874-1.02s1.922.844.588 1.634c-1.333.79-2.759 2.195-4.422 2.514c-1.663.319-7.069.575-8.02.192c-.951-.383-2.495-2.362-2.495-2.362z"
          ></path>
          <path
            fill="#99AAB5"
            d="M20.2 26.754c-.501-.269-.688-2.495-.43-2.68s2.666.185 3.225.277c.559.092 3.956-.185 4.3.185s1.173 1.726 1.462 2.541c.289.816-1.591.693-2.322.508s-5.547-.461-6.235-.831zm-7.613-14.732c.653 0 3.386-.064 3.98 0c.594.064 2.495 1.851 1.604 2.043c-.891.192-3.267.83-3.624.894s-1.663-1.149-2.079-1.468c-.415-.32-.593-1.469.119-1.469zm7.486-1.787c.33-.531 1.604-.702 1.663-.128c.059.575-.297 1.851-1.01 1.787c-.713-.063-1.129-.893-.653-1.659zm-3.446 13.469c.593-.071 1.723-.192 1.723.319s-.713.702-1.545.638c-.831-.063-.713-.893-.178-.957z"
          ></path>
          <path
            fill="#E1E8ED"
            d="M14.31 16.619c.519-.446 2.317-.511 2.733-.319c.416.192-.475 1.532-1.01 1.596c-.535.063-2.317-.767-1.723-1.277z"
          ></path>
          <path
            fill="#66757F"
            d="M26.191 26.385c.593-.159 2.02-.319 1.96.128c-.059.447-.653 1.277-1.129 1.213s-1.306-1.213-.831-1.341zm-3.861 4.469c.656-.109 1.663-.638 1.604 0c-.059.638-.772 1.468-1.545 1.341c-.772-.128-.831-1.214-.059-1.341z"
          ></path>
        </svg>
      </>
    );
  }
}
