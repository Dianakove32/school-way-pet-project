import React, {useState} from 'react';
import Tabs from "../../UI/Tabs/Tabs";
import {ListOfSchedule} from "../ListOfSchedule/ListOfSchedule";
import {ringsData1, ringsData2} from "../MockDada/diaryData";


const RingsSchedule = () => {
  const [tab, setTab] = useState('First')

  return (
    <>
      {tab === 'First' && <ListOfSchedule list={ringsData1} type={'Урок'}/>}
      {tab === 'Second' && <ListOfSchedule list={ringsData2} type={'Урок'}/>}
        <div className='tabsWrap'>
          <Tabs
            className='shift'
            options={[
              { label: "1 смена", value: "First" },
              { label: "2 Смена", value: "Second" },
            ]}
            onClick={(e: React.SetStateAction<string>) => {
              setTab(e);
            }}
          />
        </div>
      <style jsx>{`
     
      .tabsWrap{
      display:flex;
      
      }
`}</style>
    </>
  );
};

export default RingsSchedule;