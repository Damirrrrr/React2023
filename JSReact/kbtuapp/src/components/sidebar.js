import React, { useState } from 'react'
import { Profile } from './profile';
import Outlet, {Link} from 'react-router-dom';

export const Sidebar = () => {

    return(
        <div className='sidebar'>
            <div className='sidebar__inner'>
                <div className='sidebar__profile'>
                    <Link to='/profile' className='profile__link'> Your Profile!</Link>
                </div>
                <div className='sidebar__nav'>
                    <div> Home </div>
                    <div> Explore </div>
                    <div> Notifications </div>
                    <div> Messages </div>
                    <div> Bookmarks </div>
                    <div> Lists </div>
                    <div> More </div>
                </div>
            </div>
        </div>
    );
}
