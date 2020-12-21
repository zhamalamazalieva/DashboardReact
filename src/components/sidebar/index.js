import userImg from '../../assets/image/jpg/avatar.jpg';
import Support from '../../assets/image/svg/support.svg';
import Nav from './nav.jsx';
import './style.scss';
const Sidebar = () => {
    return (
        <aside className='sidebar'>
        <div className='sidebar__top'>
            <img className='sidebar__avatar' src={userImg} alt='avatar' />
            <h3 className='sidebar__user'>Will Smith</h3>
            <span className='sidebar__position'>Brain Director</span>
        </div>
        <div className='sidebar__middle'>
            <Nav />
        </div>
        <div className='sidebar__bottom'>
            <span className='sidebar__support'>Support</span>
                <a href='#' className='align-center'>
                    <img src={Support} alt='support'/>
                    <span>Support</span>
                </a>
        </div>
    </aside>
    )
};
export default Sidebar;