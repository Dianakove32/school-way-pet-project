import React from 'react';

const Header = ({title}: any) => {
  return (
    <header>
      <h4>
        {title}
      </h4>
    <style jsx>{`
    header{
    padding-top: 50px;
    }
    h4{
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 20px;
    color: #48586A;
    margin: 0px;
    }
`}</style>
    </header>
  );
};

export default Header;