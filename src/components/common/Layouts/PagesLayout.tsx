import React from 'react';
import Head from 'next/head';
import BottomMenu from '../BottomMenu/BottomMenu';
import Header from "../../PageChunks/Header";

const PageLayout = ({children, title, className}: any) => {

  return (
    <div className={className}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#525e6e" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <meta name="keywords" content="" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="NOODP" />
        <meta name="document-state" content="Dynamic" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>{title}</title>
      </Head>
      <Header title={title}/>
      <section>
        <span className='fly'></span>
        {children}
      </section>
      <footer>
      <BottomMenu/>
      </footer>
      <style jsx>{`
        section{ 
        display:flex;
        flex-direction: column;
        padding:  17px;
        position: relative;
        flex-grow: 2;
        }      
        footer{
        flex-grow: 1;
        }
        .fly{
        display: inline-block;
        background-image: url("/fly.svg");
        background-size: 100%;
        width: 35px;
        height: 22px;
        position: absolute;
        top: -40px;
        left:55px;
        }
        .diary-layout{
         background: linear-gradient(170.91deg, #EBE4FF 3.34%, #FFF2EE 37.13%, #FFFFFF 104.14%); 
         height: 844px;
        }
        .diaryScore{
        background: linear-gradient(10.25deg, #D9CCFF 8.59%, #FFF1ED 62.03%, #FFFFFF 79.64%); 
        height: 844px;
        }
        .diarySchedule{
        background: linear-gradient(14.59deg, #D9CCFF 1.28%, #FFF1ED 28.09%, #FFFFFF 52.12%) ;
        height: 844px;
        }
        .diaryScore section{
        padding-left: 0px;
        padding-right: 0px;
        }
        .calendar-layout{
        background: linear-gradient(170.91deg, #EBE4FF 3.34%, #FFF2EE 37.13%, #FFFFFF 104.14%);
        height: 844px;
        }
        .calendar-layout section{
        padding-left: 0px;
        padding-right: 0px;
        }
`}</style>
    </div>
  );
};

export default PageLayout;