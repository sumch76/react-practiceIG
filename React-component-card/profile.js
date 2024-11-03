import React from 'react'

const profile = () => {
  return (
    <div
        className='profile-card'>
            <div className='profile-header'>
                <div className='profile-pic'>
                    <img src='http://via.placeholder.com/100'
                    alt='profile'/>

                </div>

            </div>
            <div className='profile-info'>
                <h2>rita correia <span className='age'>32</span></h2>
                <p>London</p>
      </div>
      <div className="profile-stats">
        <div className="stat">
          <h3>80K</h3>
          <p>Followers</p>
        </div>
        <div className="stat">
          <h3>803K</h3>
          <p>Likes</p>
        </div>
        <div className="stat">
          <h3>1.4K</h3>
          <p>Photos</p>
            </div>
        </div>
        </div>
  )
}

export default profile;
