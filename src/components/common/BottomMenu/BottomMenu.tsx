import React from 'react';
import home from '../../../../public/nav/home.svg'
import message from '../../../../public/nav/message.svg'
import diary from '../../../../public/nav/Vector.svg'
import books from '../../../../public/nav/books.svg'
import calendar from '../../../../public/nav/calendar.svg'
import Link from 'next/link';
import {useRouter} from 'next/router';

const arMenu = [
  {
    ico: home.src,
    url: "/",
  }, {
    ico: message.src,
    url: "/message",
  }, {
    ico: diary.src,
    url: "/diary",
  }, {
    ico: books.src,
    url: "/books",
  }, {
    ico: calendar.src,
    url: "/calendar",
  },
]

const BottomMenu = () => {
  const router = useRouter()
  const r = router.asPath.split('/').map(el=> `/${el}`)

  return (
    <>
      <div className='menu-container'>
      {
        arMenu.map((el,i)=> <li className={r[1] === el.url ? 'activ' : 'img'} key={i}>
          <Link
            href={el.url}
            className='link'
          >
            <img src={el.ico} alt={'pict'} className='img'  />
          </Link>

        </li>)
      }
      </div>
      <style jsx> {`
      .menu-container{
      display: flex;
      justify-content: space-around;
      background: #A18CF3;
      height: 70px;
      padding-top: 10px; 
      position: absolute;
      bottom: 0;
      width: 100%;
      }
      .menu-container li{
      list-style-type: none;  
      }  
      .img{
      width: 22px;
      height: 24px; 
      }
      .activ{
      width: 49px;
      height: 49px;
      border-radius: 50px;
      background: #72B8FF;
      border-top: 5px solid #A18CF3;
      display: flex;
      justify-content: center;
      align-items: center;  
      margin-top: -25px;
      box-shadow: 0px 4px 8px rgba(81, 81, 81, 0.25), inset 0px 0px 11px 1px #4699ED;
      } 
      `}
      </style>
    </>
  );
};

export default BottomMenu;