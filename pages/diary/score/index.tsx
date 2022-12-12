import React, {useState} from 'react';
import Breadcrumbs from "../../../src/components/Breadcrumbs/Breadcrumbs";
import PageLayout from "../../../src/components/common/Layouts/PagesLayout";
import Tabs from "../../../src/UI/Tabs/Tabs";
import s from '../../../styles/Score.module.css'
import Link from "next/link";
import {arrScore1, arrScore2, arrScore3, arrScore4} from "../../../src/components/MockDada/diaryData";
import cn from "classnames";

const Score = () => {
  const [tab, setTab] = useState('arrScore1')

  const scoreList = {arrScore1, arrScore2,arrScore3, arrScore4}


  // @ts-ignore
  const arrScor= scoreList[tab]
  return (
    <PageLayout title={'Дневник'} className={'diaryScore'}>
      <div className={s.navBlock}>
      <Breadcrumbs title={'Оценки'} link={'/diary'}/>
      <Tabs
        className='tabs quoter'
        options={[
          { label: "1 Четверть", value: "arrScore1" },
          { label: "2 Четверть", value: "arrScore2" },
          { label: "3 Четверть", value: "arrScore3" },
          { label: "4 Четверть", value: "arrScore4" },
        ]}
        onClick={(e: React.SetStateAction<string>) => {
          setTab(e);
        }}
      />

      </div>
      <div className={cn(s.scoreContainer,s.main, 'customScroll')}>
        {
          arrScor?.map((el: any)=> <div key={el.id} className={s.scoreItem}>
            <div className={s.scoreSubject}>{el.subject}</div>
            <div className={s.scoreScore}>{el.score}</div>
            <Link href={`/diary/score/${el.id}`} className={s.scoreUnic}>
              &#62;</Link>
          </div>)
        }
      </div>
    </PageLayout>
  );
};

export default Score;

