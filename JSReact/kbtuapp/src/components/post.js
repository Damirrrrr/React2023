import React from 'react'

export const Postpage = () => {

    return(
        <div className='posts'>
            <div className='container'>
                <div className='posts__inner'>
                    <div className='post__create'>
                        <textarea className='post__text' placeholder="What's Happening?" />
                        <button role='button'> Tweet</button>
                    </div>
                    <div className='post__list'>
                        <div className='post__item'>
                            <div className='post__content'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}