import React from 'react';
import PageLayout from "../../src/components/common/Layouts/PagesLayout";


const Messages = () => {
  // @ts-ignore
  return (
    <PageLayout title={'Сообщения'} className={'diary-layout'}>
      <div className='friends-list'>
        {friendList.map(el=> <span key={el.id} className={el.class}></span>)}
      </div>
      <span className='cloud'></span>
      <div className='messages-container'>
        {
          friendList.map((el: any)=> <div key={el.id} className='messages-item'>
            <div className={el.class}></div>
            <div className='messages-content'>
              <div className='messages-name'>{el.name}</div>
              <div className='messages-message'>{el.message}</div>
            </div>
            <div className='time-content'>
              <div className='messages-time'>{el.time}</div>
              <div className={el.count ? 'messages-count' : undefined}>{el.count}</div>
            </div>
          </div>)
        }
      </div>
      <style jsx>{`
      .friends-list{
      display: flex; 
      justify-content:space-between;
      }
       .icon{
      display: block;
      width: 40px;
      height: 45px;
      filter: drop-shadow(0px 4px 6px rgba(120, 120, 120, 0.15));
      border-radius: 5px;
      }
      .fr{
      background: url("/messages/7294745 копия 1.svg") no-repeat;
      }
      .xr{
      background: url("/messages/7309697 копия 1.svg") no-repeat;
      }
      .sr{
      background: url("/messages/7309676 копия 1.svg") no-repeat;
      }
      .lr{
      background: url("/messages/7309686 копия 1.svg") no-repeat;
      }
      .mr{
      background: url("/messages/7309690 копия 1.svg") no-repeat;
      }
      .dr{
      background: url("/messages/7309697 копия 1.svg") no-repeat;
      } 
      .cloud{
      display: block;
      background: url("/messages/Rectangle.svg") no-repeat;
      width: 94px;
      height: 52px;
      margin-left: auto;
      margin-top: 10px; 
      }
      .messages-container{
        margin-top: 23px;
      }
      .messages-item{
      display: flex; 
      margin-bottom: 23px;
      align-items: center;
      }
      .messages-content{
      margin-left: 39px;
      width: 200px;
      margin-right: 30px;
      }
      .messages-name{
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;   
      color: #A18CF3;
      text-align: left;
      margin-bottom: 4px;
        
      }
      .messages-message{
      font-weight: 400;
      font-size: 12px;
      line-height: 14px; 
      color: #696F75;
      text-align: left;
      
      }
      .time-content{ 
      }
      .messages-time{ 
      font-weight: 400;
      font-size: 12px;
      line-height: 14px; 
      color: #A18CF3;
        margin-bottom: 12px;
      }
      .messages-count{  
      display:flex;
      justify-content:center;
      align-items: center;
      background: #FB6DFF; 
      box-shadow: 0px 4px 4px rgba(103, 101, 108, 0.15);
      width: 24px;
      height: 24px;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;  
      color: #FFFFFF;
      opacity: 0.8;
      border-radius: 50%;
      }
`}</style>
    </PageLayout>
  );
};

export default Messages;

const friendList = [
  {
    class: 'icon fr',
    id: '1',
    name: 'Михаил Львович',
    message: 'Добрый вечер, хочу напомнить...',
    time: '17:15',
    isRead: false,
    count: '2'
  },
  {
    class: 'icon xr',
    id: '2',
    name: 'Диана Сурига',
    message: 'Привет! Ты сделала домашку по матеше ...',
    time: '17:15',
    isRead: false,
    count: '5'
  },
  {
    class: 'icon sr',
    id: '3',
    name: 'Даша Бауэр',
    message: 'Hi!  Пойдём погуляем...',
    time: '17:15',
    isRead: false,
    count: '1'
  },
  {
    class: 'icon mr',
    id: '4',
    name: 'Илья Пономарёв',
    message: 'Hi!  Пойдём погуляем...',
    time: '17:15',
    isRead: false,
    count: ''
  },
  {
    class: 'icon lr',
    id: '5',
    name: 'Михаил Львович',
    message: 'Добрый вечер, хочу напомнить...',
    time: '17:15',
    isRead: false,
    count: ''
  },
  {
    class: 'icon fr',
    id: '6',
    name: 'Михаил Львович',
    message: 'Добрый вечер, хочу напомнить...',
    time: '17:15',
    isRead: false,
    count: '2'
  },
]
