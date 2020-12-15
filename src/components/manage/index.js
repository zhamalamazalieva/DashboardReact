import filterBtn from '../../assets/image/svg/filter.svg';
import searchBtn from '../../assets/image/svg/search.svg';
import './style.scss';


const Manage = () => {
    return(
       <section className='manage col-10'>
            <form className='manage__from'>
            <button className='btn btn--gray manage__btn'>
                <img src={filterBtn} className='manage__icon-filter' alt='filter-icon'/>
                FILTER
            </button>
            <img className='manage__search-icon' src={searchBtn} />

            <input type='text' className='manage__input' placeholder='Search users by name, id'>
            </input>
        </form>
        </section>
    )
};
export default Manage;