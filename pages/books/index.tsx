import React, {useState} from 'react';
import PageLayout from "../../src/components/common/Layouts/PagesLayout";
import Tabs from "../../src/UI/Tabs/Tabs";
import Image from "next/image";

const Books = () => {
  const [tab, setTab] = useState('')
    const changeTab=(tab:any):void=>{
        setTab(tab)
    }
  console.log(tab)
  // @ts-ignore
  return (
    <PageLayout title='Библиотека' className={'diary-layout'}>
        <Tabs
          className='books'
          options={[
            { label: "Учебники", value: "Books" },
            { label: "Книги", value: "Study" },
            { label: "Статьи", value: "Articles" },
            { label: "Видео", value: "Video" },
            { label: "Все", value: "" },
          ]}
          onClick={(e: React.SetStateAction<string>) => {
            setTab(e);
          }}
        />
      <div className={'content'}>
        {(tab=== '' || tab === 'Books') && <> <div className='title-wrapper'>
          <div className='title-name'>Книги</div>
          <div className='title-common' onClick={() => changeTab('Books')}> Смотреть все</div>
        </div>
          <div className={'books-cont'}>
        {booksArr.map(el=> <div className={'books-item'}>
          <img src={el.img}/>
          </div>

          )}
          </div></>}
        {(tab=== '' || tab === 'Articles') && <>
          <div className='title-wrapper'>
          <div className='title-name'>Статьи</div>
          <div className='title-common' onClick={() => changeTab('Articles')}> Смотреть все</div>
        </div>
          <div className={'books-cont'}>
        {articlesArr.map(el=> <div className={'articles-item'}>
          <div className='articles-title'>{el.title}</div>
          <div className='articles-text'>{el.text}</div>
          <div className='articles-time'>{el.time}</div>
          </div>)}
          </div>
        </>}
        {(tab=== '' || tab === 'Study') && <>
        <div className='title-wrapper'>
          <div className='title-name'>Учебники</div>
          <div className='title-common' onClick={()=>changeTab('Video')}> Смотреть все</div>
        </div>
        <div className={'books-cont'}>
            {studyArr.map(el=> <div className={'books-item'}>
                <img src={el.img}/>
              </div>
            )}

        </div></>}
      </div>
      <style jsx>{`
        .content{
        margin-top: 44px;
        height: 600px;
        overflow-y: auto;
        }
        .books-cont{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        
        }
        .books-item img{
        width: 170px;
        height: 227px; 
        box-shadow: 0px 4px 4px rgba(83, 17, 84, 0.2);
        border-radius: 20px;
        background: #EEEAFF;
        margin-bottom: 12px; 
        }
        .title-wrapper{
        display:flex;
        justify-content: space-between;
          margin-bottom: 18px;
        }
        .title-name{
        font-weight: 400;
        font-size: 16px;
        line-height: 18px; 
        color: #48586A;
        }
        .title-common{
        font-style: italic;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px; 
        color: #778492;
        cursor: pointer;
        }
        .articles-item{
        background: #FFFFFF;
        box-shadow: 0px 6px 17px rgba(67, 49, 136, 0.12);
        border-radius: 24px;
        width: 175px;
        height: 98px;
        padding: 5px;
        margin-bottom: 12px;

        }
        .articles-title{
        font-weight: 400;
        font-size: 12px;
        line-height: 14px; 
        text-align: center; 
        color: #72B8FF;
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
        margin-bottom: 4px;

        }
        .articles-text{
        font-weight: 400;
        font-size: 12px;
        line-height: 14px; 
        text-align: center; 
        color: #696F75;
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
          margin-bottom: 4px;
        }
        .articles-time{
        font-style: italic;
        font-weight: 300;
        font-size: 10px;
        line-height: 22px;  
        text-align: left;
        letter-spacing: -0.408px; 
        color: #A9A9A9;
        }
      `}</style>
    </PageLayout>
  );
};

export default Books;

const booksArr=[{
  name:'Маленький мук',
  img: 'https://rust.litnet.com/uploads/covers/220/1585118821_45.png',
},
  {
  name:'Креншоу',
  img:  'https://rust.litnet.com/uploads/covers/220/1593584293_92.jpg'
},
]
const studyArr=[{
  name:'Маленький мук',
  img: 'https://uchebniki.by/cache/imagecache/w140-h1000-c-media-katalog-narodnaya_asveta-id01438.jpg',
},
  {
  name:'Креншоу',
  img:  'https://uchebniki.by/cache/imagecache/w140-h250-c-media-katalog-nio-id01499.jpg'
},
]

const articlesArr = [
  {
    title: 'Мини верталёт NASA исследует Марс',
    text:'Ровер Perseverance, разработанный в NASA...',
    time:'06.10.2022'
  },
  {
    title: 'Мини верталёт NASA исследует Марс',
    text:'Ровер Perseverance, разработанный в NASA...',
    time:'06.10.2022'
  },
  {
    title: 'Мини верталёт NASA исследует Марс',
    text:'Ровер Perseverance, разработанный в NASA...',
    time:'06.10.2022'
  },
  {
    title: 'Мини верталёт NASA исследует Марс',
    text:'Ровер Perseverance, разработанный в NASA...',
    time:'06.10.2022'
  },
]