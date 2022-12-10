import React from 'react';
import Head from 'next/head';
import BottomMenu from '../BottomMenu/BottomMenu';

const MainLayout = ({children,className}:any) => {
  return (
    <div className={className ? className : 'main-layout'}  >
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
      </Head>

      <section>{children}</section>
      <footer>
      <BottomMenu/>
      </footer>
      <style jsx> {`
      .main-layout{
      background: linear-gradient(14.59deg, #D9CCFF 1.28%, #FFF1ED 28.09%, #FFFFFF 52.12%) no-repeat;
      height: 100vh;
      }
      .error-page-wrapper{ 
      text-align: center;
      padding-top: 40%;
      background: linear-gradient(14.59deg, #D9CCFF 1.28%, #FFF1ED 28.09%, #FFFFFF 52.12%) no-repeat;
      height: 100vh;
      }
       //section{ 
       // display:flex;
       // padding:  17px;
       // position: relative;
       // flex-grow: 2;
       // }      
       // footer{
       // flex-grow: 1;
       // }
      `}
       </style>
    </div>
  );
};

export default MainLayout;