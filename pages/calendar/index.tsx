import React, {useState} from 'react';
import PageLayout from "../../src/components/common/Layouts/PagesLayout";
import Tabs from "../../src/UI/Tabs/Tabs";
import RingsSchedule from "../../src/components/Rings/RingsSchedule";
import Day from "./Day";
import Week from "./Week";
import Month from "./Month";

const Index = () => {
  const [tab, setTab] = useState('Day')
  const tabsList = {Day, Week, Month}
  // @ts-ignore
  let Component = tabsList[tab];
  return (
    <PageLayout title={'Календарь'} className={'calendar-layout'}>
      <div className='tabsWrap'>
        <Tabs
          className='tabs'
          options={[
            { label: "День", value: "Day" },
            { label: "Неделя", value: "Week" },
            { label: "Месяц", value: "Month" },
          ]}
          onClick={(e: React.SetStateAction<string>) => {
            setTab(e);
          }}
        />
      </div>
        <div>
          {Component && <Component />}
        </div>
      <style jsx>{`
      .tabsWrap{
      padding: 0px 14px;
      }
     
      `}</style>
    </PageLayout>
  );
};

export default Index;