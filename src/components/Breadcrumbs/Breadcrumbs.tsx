import React from 'react';
import Router from "next/router";


const Breadcrumbs = ({title, link}: any) => {

  const handleBack = () => {
    Router.push(link)
  }
  return (<>
      <div className='breadcrumbs' onClick={handleBack}>
        <span className='icon'>&#706;</span>{title} </div>
      <style jsx>{`
        .breadcrumbs{
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;  
        color: #48586A;
        cursor: pointer;
        }
        .icon{
          margin-right: 10px;
          font-size: 18px;
          font-weight: 700;
          color:#48586A;
        }
      `}</style>
  </>
  );
};

export default Breadcrumbs;