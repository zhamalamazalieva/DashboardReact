import userImg from '../../assets/image/jpg/avatar.jpg';
import Nav from './nav.jsx';
import Support from '../../assets/image/svg/support.svg';
import './style.scss';
const Sidebar = () => {
    return (
        <aside className='sidebar col-2'>
        <div className='sidebar__top'>
            <img className='sidebar__avatar' src={userImg} alt='avatar' />
            <h3 className='sidebar__name'>Will Smith</h3>
            <span className='sidebar__position'>Brain Director</span>
        </div>
        <div className='sidebar__middle'>
            <Nav />
            <div className='sidebar__bottom'>
                <span className='sidebar__support'>Support</span>
                    <a href='#' className='align-center'>
                        <img src={Support} alt='support' />
                        <span>Support</span>
                    </a>
            </div>
            <hr/>
        </div>
    </aside>
    )
};
export default Sidebar;