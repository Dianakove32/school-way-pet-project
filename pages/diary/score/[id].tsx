import React from 'react';
import {useRouter} from "next/router";
import PageLayout from "../../../src/components/common/Layouts/PagesLayout";
import Breadcrumbs from "../../../src/components/Breadcrumbs/Breadcrumbs";
import {arrDetailScore} from '../../../src/components/MockDada/diaryData'
import s from '../../../styles/Score.module.css'
import {arrScore1} from "../../../src/components/MockDada/diaryData";


const ScoreBySubject = () => {
  const {query} = useRouter()
  const sbg: any = arrScore1?.find(el=>el.id === query.id)
  return (
    <PageLayout title={"Оценки"} className={'diaryScore'}>
    <div className={s.navBlock}>
    <Breadcrumbs link={'/diary/score'} title={sbg?.subject}/>
      <div>Месяц</div>
    </div>
      <div className={s.scoreContainer}>
      {
        arrDetailScore.map((el: any)=> <div key={el.id} className={el.comment ? s.scoreColored : s.scoreDetailItem}>
          <div className={s.scoreData}>{el.data}</div>
          <div className={s.scoreDetailScore}>{el.score}</div>
          <div className={s.scoreComment}>{el.comment}</div>
        </div>)
      }</div>
    </PageLayout>
  );
};

  export default ScoreBySubject;