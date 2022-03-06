import React from 'react';
import './News.css';
import CardItem from './CardItem';
import Navbar from './Navbar';
import Footer from './Footer';

const News = () => {
    return (
        <>
        <Navbar/>
    <body>
        <center><h2>Latest News</h2></center>
         <div className='cards'>
         {/*Catchy Line*/}
       <div className='cards__container'>
         <div className='cards__wrapper'>
           <ul className='cards__items'>
                {/*Sports Available*/}
             <CardItem
               src='images/img9.jpg'
               text='"Neeraj Chopra Wins Gold in Olympics"'
               label='Star Javelin Thrower'
               path='/services'
             />
             <CardItem
               src='images/img10.png'
               text='" India create history, win Olympic hockey medal after a gap of 41 years "'
               label='Hockey'
               path='/services'
             />
           </ul>
 
           <ul className='cards__items'>
             <CardItem
               src='images/img11.jpg'
               text='"Dutee Chand wins 100m gold at World University Games "'
               label='Tokyo Olympics'
               path='/services'
             />
             <CardItem
               src='images/img12.jpg'
               text='"India Wins in Cricket"'
               label='Cricket'
               path='/services'
             />
           </ul>
 
         </div>
       </div>
     </div>
     <Footer/>
     </body>
     </>
    )
};

export default News;

