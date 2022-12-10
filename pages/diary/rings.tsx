import React, {useState} from 'react';
import PageLayout from "../../src/components/common/Layouts/PagesLayout";
import Tabs from "../../src/UI/Tabs/Tabs";
import RingsSchedule from "../../src/components/Rings/RingsSchedule";
import QuoterSchedule from "../../src/components/QuoterSchedule/QuoterSchedule";
import HolidaysSchedule from "../../src/components/HolidaysSchedule/HolidaysSchedule";
import Breadcrumbs from "../../src/components/Breadcrumbs/Breadcrumbs";

const Rings = () => {
  const [tab, setTab] = useState('RingsSchedule')
  const tabsList = {RingsSchedule, QuoterSchedule, HolidaysSchedule}
  // @ts-ignore
  let Component = tabsList[tab];

  return (
    <>
    <PageLayout title={'Дневник'} >
      <Breadcrumbs title={'Расписание звонков'} link={'/diary'}/>
      <div className='tabsWrap'>
        <Tabs
          className='tabs'
          options={[
            { label: "Звонки", value: "RingsSchedule" },
            { label: "Четверти", value: "QuoterSchedule" },
            { label: "Каникулы", value: "HolidaysSchedule" },
          ]}
          onClick={(e: React.SetStateAction<string>) => {
            setTab(e);
          }}
        />
      </div>
      <div>
        {Component && <Component />}
      </div>
    </PageLayout>

    </>
  );
};

export default Rings;