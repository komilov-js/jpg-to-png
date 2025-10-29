import React from 'react';
import Image from 'next/image';
import './remove-home.scss';
import Link from 'next/link';

const RemoveHome = () => {
  return (
    <div className='remove-home'>
      <h1 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '10px' }}>
        Remove Bg
      </h1>
      <div>
        <Image
          src="https://depositphotos-blog.s3.eu-west-1.amazonaws.com/uploads/2021/04/Remove-Image-Backgrounds-In-a-Click-With-the-Depositphotos-Free-Tool.gif"
          alt="Remove background animation"
          width={500}
          height={400}
          style={{ borderRadius: '16px' }}
        />
      </div>
      <div className='remove-home-text'>
        <p>100% Automatically and <span>Free</span></p>
      </div>
      <Link href='/remove-bg'>
        <div className='upload-image'>
          Upload Image

        </div>
      </Link>
    </div>
  );
};

export default RemoveHome;
