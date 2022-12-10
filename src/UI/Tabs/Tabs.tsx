import React, { useEffect, useState } from 'react'
import cn from 'classnames'


const Tabs = ({ options, onClick, defaultValue = options[0].value, value, className='' }: any) => {
  const [tab, setTab] = useState(value ? value : defaultValue)
  const onSelect = (value: any) => {
    setTab(value)
    onClick(value)
  }
  useEffect(() => { if (value) setTab(value) }, [value])

  return <div className='tabsWrap'>
  <div className={cn(className)}>
    {options.map((tabEl: any) => <div key={tabEl.value} className={tabEl.value === tab ? cn(`${className}-active`,`${className}-tab-item`) : `${className}-tab-item`}
                                      onClick={() => onSelect(tabEl.value)}>{tabEl.label}</div>)}
  </div>
  <style jsx>{`
      .tabsWrap{
      width: 100%;
      }
      .tabs{
      display:flex;
      justify-content: space-between;
      margin: 30px 0px 30px 0px;
      background: #FFFFFF;
      border-radius: 16px;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px; 
      text-align: center; 
      color: #696F75;
      //box-shadow: 0px 4px 4px rgba(83, 17, 84, 0.2);
      }
      .tabs-tab-item, .quoter-tab-item{
      display:flex;
      justify-content: center;
      align-items: center;
      width: 113px;
      height: 28px;
      padding: 15px 33px; 
      cursor: pointer;
      }
      .tabs-active{
      background: linear-gradient(357.82deg, #FB6DFF 13.77%, #FEEDFF 189.26%);
      box-shadow: 0px 4px 4px rgba(83, 17, 84, 0.2);
      border-radius: 16px;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px; 
      color: #FDFDFD;
      }
      .shift{
      display: flex;
      justify-content: space-between;
      width: 100%;
      }
      .shift-tab-item{
      display:flex;
      justify-content: center;
      align-items: center;
      width: 173px;
      height: 50px; 
      cursor: pointer;
      color: #696F75;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      box-shadow: 0px 6px 17px rgba(67, 49, 136, 0.12);
      border-radius: 32px;
      }
      .shift-active{
      background: linear-gradient(0deg, #FEC32A 19.35%, #FFFBF1 151%);
      box-shadow: 0px 6px 17px rgba(67, 49, 136, 0.12);
      border-radius: 32px;
      }  
      .quoter-active{
      background: linear-gradient(357.82deg, #FB6DFF 13.77%, #FEEDFF 189.26%);
      box-shadow: 0px 4px 4px rgba(83, 17, 84, 0.2);
      border-radius: 16px;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px; 
      color: #FDFDFD; 
      }
      .quoter-tab-item{
      display:flex;
      justify-content: center;
      align-items: center;
      width: 90px;
      height: 28px;
      padding: 7px 14px; 
      cursor: pointer;
      margin: 0;
      }
`}</style>
  </div>
}


export default Tabs