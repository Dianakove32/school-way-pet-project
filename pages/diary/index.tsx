import React from 'react';
import PageLayout from "../../src/components/common/Layouts/PagesLayout";
import Link from "next/link";
import classNames from "classnames";

const navDiary = [
  {
  className: 'green',
  title: 'Расписание занятий',
    link: '/diary/schedule'
}, {
  className: 'yellow',
  title: 'Домашнее задание',
    link: '/diary/homework'
}, {
  className: 'pink',
  title: 'Расписание звонков',
    link: '/diary/rings'
}, {
  className: 'blue',
  title: 'Оценки',
    link: '/diary/score'
},

]
const DiaryPage = () => {
  return (
    <PageLayout className='diary-layout' title={'Дневник'}>
    <div className='quote-container'>
      <div className='quote'>
        <p><b>Релфи</b> - автопротрет с любимым, родственниками или друзьями. Разновидность селфи</p>
      </div>
      <div className='pict'/>
    </div>
      <div className='nav-diary'>
        {navDiary.map(link => <div className= 'link-item' key={link.title}>
          <Link href={link.link}>
              <span className={classNames(link.className, 'picture') }></span>
            <p className='title'>{link.title}</p>
          </Link>
        </div>)}
      </div>
      <style jsx>{`
      .diary-layout{
     align-items: center;
      }
      .nav-diary{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      }
      .quote-container{
      display:flex;
      justify-content:space-between;
      align-items: center;  
      }
      .quote{
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #696F75;
      width: 153px;
      padding-left: 10px;
      }      
      .pict{ 
        background: url("/CharacterBacktoschool.svg") no-repeat;
        background-size: inherit; 
        background-position: center;
        width: 158px;
        height: 170px;
        filter: drop-shadow(2px 9px 35px rgba(60, 50, 69, 0.2));
      }
      .link-item{
      display:flex;
      justify-content: center;
      align-items: center;
      width: 357px;
      height: 80px; 
      background: #FFFFFF; 
      box-shadow: 0px 6px 17px rgba(67, 49, 136, 0.12);
      border-radius: 24px;
      margin-bottom: 27px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;  
      color: #48586A;
      position: relative;
      }
      .picture{
      position: absolute;
      left: 15px;
      top: 18px;
      display: inline-block;
      width: 50px;
      height: 50px;
      }
      .nav-diary div:first-child{
      margin-top: 45px;
      }
      .green{
      background: url('/diary/green.svg') no-repeat; 
      background-size: 100%; 
      }
      .blue{
      background: url('/diary/blue.svg') no-repeat; 
      background-size: 100%; 
      }
      .pink{
      background: url('/diary/pink.svg') no-repeat; 
      background-size: 100%; 
      }
      .yellow{
      background: url('/diary/yellow.svg') no-repeat; 
      background-size: 100%; 
      }
`}</style>
    </PageLayout>
  );
};

export default DiaryPage;