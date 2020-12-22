import React from 'react';
import {rows, columns} from './const';
import { DataGrid } from '@material-ui/data-grid';
import './style.scss';



export default function Manage() {
  return (
    <div style={{ height: 400, width: '100%' }} className='manage'>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
// import filterBtn from '../../assets/image/svg/filter.svg';
// import searchBtn from '../../assets/image/svg/search.svg';
// import {BtnGoBack, BtnFilter, BtnAdd} from '../../components/btns/index.js';
// import SearchForm from '../../components/search_form/search_form';
// import Items from './items';
// import './style.scss';
// import axios from 'axios';

// const Manage = () => {
//     const [userData, setUserData] = React.useState([]);
//     const [newUser, setNewUser] =React.useState({
//         id:'',
//         avatar:'',
//         fullName:'',
//         userID:'',
//         email:'',
//         phone:'',
//         dateOfRegistry:''
//     });
    
//     const modalRef =React.useRef();
//     const modalWrapperRef = React.useRef();
//     const handleClickOutside = (event) => {
//         if(!event.path.includes(modalRef.current)){
//             setActiveModal(false);
//         }
//     };
//     const [activeModal, setActiveModal] = React.useState(false);    
//     const handleClick = () => {
//         setActiveModal(activeModal ? false:true);
//     };

//     const SaveData = (event) => {
//         setNewUser({
//             id:'',
//             avatar:event.target.form[4].value,
//             fullName:event.target.form[0].value,
//             userID:event.target.form[1].value,
//             email:event.target.form[3].value,
//             phone:event.target.form[2].value,
//             dateOfRegistry:'',
//         }) 
//     }   
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setUserData([...userData, newUser]);
//         setNewUser({
//             id:'',
//             avatar:'',
//             fullName:'',
//             userID:'',
//             email:'',
//             phone:'',
//             dateOfRegistry:''
//         });
//     }
//     React.useEffect(async () => {
//         await axios
//         .get(`http://localhost:3000/database.json`)
//         .then((response) => response)
//         .then(({data}) => setUserData(data.users));
//       }, []);
//     React.useEffect(() => {
//         if (modalWrapperRef.current){
//             modalWrapperRef.current.addEventListener('click', handleClickOutside);
//         }}, [activeModal]
//    );
//     return(
//        <section className='manage'>
//             <div className='space-between'>
//                 <div className='row'>
//                 <BtnFilter />
//                 <SearchForm />
//                 </div>            
//                 <div onClick={handleClick} >
//                 <BtnAdd />
//                 </div>
//            </div>
//            {activeModal &&(
//                <div ref={modalWrapperRef} className='modal__wrapper'>
//                    <div ref={modalRef} className='modal'>

//                         <div className='col-6 modal__left'>
//                             <div onClick={() => setActiveModal(false)}>
//                             <BtnGoBack />
//                             </div>
//                             <h2 className='modal__title'>Create a new user</h2>
//                             <span className='modal__subtitle'>Add main information about user</span>
//                                 <form className='manage__form form' onSubmit = {(event) => handleSubmit(event)}>
//                                         <label>
//                                             <span className='form__text'>Name</span>
//                                             <input required onChange = {(event) => SaveData(event)}
//                                              value={newUser.fullName} type='text' className='form__input' placeholder='Name'/>
//                                         </label>
//                                         <label>
//                                             <span className='form__text'>ID Number</span>
//                                             <input required onChange = {(event) => SaveData(event)}
//                                              value={newUser.userID} type='text' className='form__input' placeholder='ID Number'/>
//                                         </label>
//                                         <label>
//                                             <span className='form__text'>Phone Number</span>
//                                             <input required onChange = {(event) => SaveData(event)}
//                                              value={newUser.phone} type='text' className='form__input' placeholder='Phone Number'/>
//                                         </label>
//                                         <label>
//                                             <span className='form__text'>Email</span>
//                                             <input required onChange = {(event) => SaveData(event)}
//                                              value={newUser.email} type='email' className='form__input' placeholder='Email'/>
//                                         </label>
//                                         <label>
//                                             <span className='form__text'>Profile Picture</span>
//                                             <input required onChange = {(event) => SaveData(event)}
//                                              value={newUser.avatar} type='text' className='form__input' placeholder='Profile Picture'/>
//                                         </label>                                
//                                         <button type='submit' className='form__btn'>ADD NEW USER</button>
//                                 </form>
//                         </div>

//                         <div className='col-6  modal__right'>
//                             <div className='modal__background'>
//                             <div className='modal__logo'>
//                             <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M0 18.1065C0 27.9411 8.05887 36 18.1065 36C27.9411 36 36 27.9411 36 18.1065C36 8.05887 27.9411 0 18.1065 0C8.05887 0 0 8.05887 0 18.1065ZM33.7263 18.1065C33.7263 26.6854 26.6854 33.7263 18.1065 33.7263C9.34353 33.7263 2.27368 26.714 2.27368 18.1065C2.27368 9.3146 9.3146 2.27368 18.1065 2.27368C26.714 2.27368 33.7263 9.34353 33.7263 18.1065Z" fill="white"/>
//                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4288 13.5917C16.7107 13.359 17.0649 13.2318 17.4305 13.2318C17.7922 13.2318 18.1429 13.3564 18.4235 13.5846L22.6335 17.0082C23.0074 17.3123 23.5156 17.3923 23.9648 17.218L25.9502 16.4474C26.1292 16.3779 26.3302 16.4036 26.4851 16.517C27.0788 16.9516 28.5751 18.0497 29.1289 18.482C30.4861 19.5416 31.486 20.25 31.486 20.25C31.486 20.25 31.4686 19.8601 31.486 19.4401C31.846 10.718 25.2324 4.39017 17.8022 4.50144C10.3803 4.61568 4.38132 10.5662 4.50178 18.8354C4.51309 19.5319 4.6193 20.25 4.6193 20.25L6.50953 18.8354L8.80622 17.1806C9.12242 16.9528 9.54513 16.9393 9.87525 17.1464L10.7991 17.7261C11.0088 17.8577 11.2793 17.8402 11.4703 17.6826L16.4288 13.5917Z" fill="white"/>
//                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6359 34.7904C18.8195 35.0437 20.6187 34.6644 21.2437 34.486C21.5288 34.4046 22.5941 34.144 22.8452 34.0596C23.6863 33.777 24.9699 33.1782 25.7013 32.7418C26.7957 32.0887 27.5685 31.4007 28.6388 30.4354C31.015 28.2924 32.625 24.3249 32.625 23.92C32.625 23.8287 28.2146 20.5068 26.9191 19.5329C26.7151 19.3796 26.4318 19.4032 26.253 19.5853C26.0843 19.7571 26.0583 20.0226 26.1911 20.2234C26.6343 20.894 27.5743 22.3246 27.6195 22.4617C27.792 22.9849 27.5465 23.2804 27.3009 23.1231C27.0553 22.9658 21.5646 19.2672 21.5646 19.2672L18.2802 16.9963C17.8686 16.7117 17.3068 17.0063 17.3068 17.5066C17.3068 17.5066 17.1957 19.1166 17.1957 20.1676C17.1957 20.5941 17.1518 21.1118 16.6359 21.246C16.3774 21.3132 15.7234 21.3527 15.7234 21.3527L10.1751 20.9334C9.79851 20.905 9.58736 21.358 9.85128 21.6281C9.85128 21.6281 17.1957 26.5849 17.1957 26.9884C17.1957 27.846 14.552 26.4718 12.4773 25.4639C9.95208 24.2372 7.14641 23.1341 6.44734 22.8633C6.34242 22.8227 6.22787 22.8316 6.13033 22.8877C5.52897 23.2335 3.35694 24.4869 3.37515 24.5407C4.0878 26.6437 5.97806 29.7235 8.8419 31.7745C9.987 32.5946 11.3079 33.3606 12.5939 33.8365C14.0645 34.3806 15.6064 34.7904 16.6359 34.7904Z" fill="white"/>
//                                 </svg>
//                             </div>
//                             </div>
//                         </div>

//                    </div>
//                 </div>
            
//             )}
//            <table className='manage__users users'>
//                <tr className='users__row'>
//                    <th className='col-4 users__headers'>Selected 2 Users</th>
//                    <th className='col-2 users__headers'>Users ID</th>
//                    <th className='col-2 users__headers'>Phone Number</th>
//                    <th className='col-2 users__headers'>Email Address</th>
//                    <th className='col-2 users__headers'>Account Created</th>
//                </tr>   
//                <Items users={userData}/> 
//            </table>
//         </section>
//     )
// };
// export default Manage;