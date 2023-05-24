import React from 'react';
import packaging from './packaging.module.scss';
import picOne from '../../../Assets/home/packagingPicOne.png';
import picTwo from '../../../Assets/home/packagingPicTwo.png';

const Packaging = () => {
  return (
    <div className={packaging.packContainer}>
    <h1>
    Meet your packaging partner
    </h1>

    <p>
    Lorem ipsum dolor sit amet consectetur. Donec id lectus et proin neque facilisis aliquam. Suspendisse ac vitae ipsum arcu ut sodales a id nunc. Nec ut tristique maecenas mauris pharetra. Molestie elementum risus elit sed feugiat vel enim nibh. Pharetra molestie diam velit sit odio id nunc. Eu varius tristique non velit non magna amet felis ut.
    </p>

    <a href="#">
    Learn More
    </a>

    <img className={packaging.picOne} src={picOne} alt="the pics" />
    <img className={packaging.picTwo} src={picTwo} alt="the pics" />
    </div>
  )
}

export default Packaging