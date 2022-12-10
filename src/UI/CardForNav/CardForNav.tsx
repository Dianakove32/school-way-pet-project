import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

const CardForNav = (props: any) => {
  return (
    <div className={classNames(props.class)}>
      <Link href={props.link}>
      <div>
      <span  className={props.pict}></span>
      </div>
      <p className='title'>{props.title}</p>
      </Link>
      <style jsx>{`
        .big-card, .small-card{
        border-radius: 32px;
        width: 165px;
        background: #EEEAFF; 
        box-shadow: 0px 6px 17px rgba(67, 49, 136, 0.12);
        margin-bottom: 16px;
        }
        .big-card div{ 
        height: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
        }
        .small-card{
        height: 120px;
        }
        .small-card div{ 
        height: 80px;
        display: flex; 
        justify-content: center;
        align-items: center;
        }
        .title{
        background: #FFFFFF;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        padding: 10px 30px;
        border-radius: 0px 0px 32px 32px;
        margin: 0px;
        }
        .calendarPict{
        background-image: url("/calendar.svg");
        background-repeat: no-repeat;
        background-size: 100px 100px;
        width: 99px;
        height: 99px;
        
        }
        .messagePict{
        background-image: url("/message.svg");
        background-repeat: no-repeat;
        background-size: 100px 90px;
        width: 108px;
        height: 97px; 
        background-position-y: -150%;
        }
        .diaryPict{
         background-image: url("/Novel-paling-laris-di-Malaysia-webp 1.svg");
        background-repeat: no-repeat;
        background-size: 80px 80px;
        width: 80px;
        height: 80px;
        background-position-y: -150%;
        }
        .booksPict{
         background-image: url("/books.svg");
        background-repeat: no-repeat;
        background-size: 100px 100px;
        width: 99px;
        height: 99px;
        }
          `}
      </style>
    </div>
  );
};

export default CardForNav;