import Support from "../../assets/image/svg/support.svg";
import Nav from "./nav.jsx";
import Avatar from './avatar';
import {Link} from 'react-router-dom';
import "./style.scss";
const Sidebar = () => {
    return (
        <aside className="sidebar">
            <Avatar/>
        <div className="sidebar__middle">
            <Nav />
        </div>
        <div className="sidebar__bottom">
            <span className="sidebar__support">Support</span>
                <a href="#" className="row align-center">
                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="21">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.56511 17.5163V20.6483L9.80921 20.048C14.2723 17.8991 17.2651 13.5665 17.2651 9.26C17.2651 4.7012 13.5589 0.994995 9.00011 0.994995C4.44131 0.994995 0.735107 4.7012 0.735107 9.26C0.735107 13.6709 4.20641 17.2901 8.56511 17.5163ZM2.47511 9.26C2.47511 5.6582 5.39831 2.735 9.00011 2.735C12.6019 2.735 15.5251 5.6582 15.5251 9.26C15.5251 12.4964 13.4719 15.785 10.3051 17.786V15.785H9.00011C5.39831 15.785 2.47511 12.8618 2.47511 9.26ZM9.87011 12.74V14.48H8.13011V12.74H9.87011ZM9.67039 8.66985C8.94975 9.22223 8.13011 9.85049 8.13011 11.435H9.87011C9.87011 10.482 10.4887 9.94143 11.1236 9.38661C11.7928 8.80178 12.4801 8.20113 12.4801 7.085C12.4801 5.16229 10.9228 3.605 9.00011 3.605C7.07741 3.605 5.52011 5.16229 5.52011 7.085H7.26011C7.26011 6.128 8.04311 5.345 9.00011 5.345C9.95711 5.345 10.7401 6.128 10.7401 7.085C10.7401 7.84991 10.2357 8.23653 9.67039 8.66985Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0)">
                        <rect x="-3" y="-1" width="24" height="24" fill="#66788A"/>
                        </g>
                    </svg>
                    <span>Support</span>
                </a>
        </div>
    </aside>
    )
};
export default Sidebar;