import filterBtn from '../../assets/image/svg/filter.svg';
import searchBtn from '../../assets/image/svg/search.svg';
import './style.scss';


const Manage = () => {
    return(
       <section className='manage col-10'>
           <div className='manage__row row'>
           <form className='manage__from'>
            <button className='btn btn--gray manage__btn'>
                <img src={filterBtn} className='manage__icon-filter' alt='filter-icon'/>
                FILTER
            </button>
            <button className='manage__search-btn btn'>
               <img className='manage__search-icon' src={searchBtn} />
            </button>
            <input type='text' className='manage__input' placeholder='Search users by name, id' />
            </form>
            <button className='manage__btn-add btn'>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 6H8V1C8 0.45 7.55 0 7 0C6.45 0 6 0.45 6 1V6H1C0.45 6 0 6.45 0 7C0 7.55 0.45 8 1 8H6V13C6 13.55 6.45 14 7 14C7.55 14 8 13.55 8 13V8H13C13.55 8 14 7.55 14 7C14 6.45 13.55 6 13 6Z" fill="black"/>
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
            <path d="M13 6H8V1C8 0.45 7.55 0 7 0C6.45 0 6 0.45 6 1V6H1C0.45 6 0 6.45 0 7C0 7.55 0.45 8 1 8H6V13C6 13.55 6.45 14 7 14C7.55 14 8 13.55 8 13V8H13C13.55 8 14 7.55 14 7C14 6.45 13.55 6 13 6Z" fill="white"/>
            </mask>
            <g mask="url(#mask0)">
            <rect x="-5" y="-5" width="24" height="24" fill="white"/>
            </g>
</svg>


            ADD USER
            </button>
           </div>
        </section>
    )
};
export default Manage;