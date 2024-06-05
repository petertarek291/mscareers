import React from 'react';
import '../Main/index.css';
import ImageMe from '../img/GCS_Home Page_Hero.png'
const Index = () => {
    return (
        <div className='relative block w-full'>
            <img src={ImageMe} className='h-96 max-h-96 block w-full'/>
            <h1 className='p-10 font-bold absolute top-1/4 text-5xl'>Because impact matters</h1>


        <form className='absolute ml-5 top-1/2 mt-10 left-5 w-2/3'>  
            <input type='text'className='p-5 h-12 w-2/3' placeholder='Search by job title,ID or keyword'/>
            <input type='submit' className='w-1/4 h-12 bg-purple-900  text-white' value="Find Jobs"/>
        </form>
            </div>
    );
}

export default Index;
