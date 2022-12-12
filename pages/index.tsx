import photo from '../public/pict.svg'
import CardForNav from '../src/UI/CardForNav/CardForNav';
import MainLayout from '../src/components/common/Layouts/MainLayout';

export default function Menu() {
  return (
    <>
      <MainLayout>
        <div className="wrapper-menu">
          <div className="header-menu">
            <div className="logo-block">
              <span className="logout"></span>
              <span className="separator">|</span>
              <span className="logo"></span>
            </div>
            <div>
              <span className="extra-person"></span>
              <span className="ring"></span>
            </div>
          </div>
          <div className="user-card">
            <div className="user-info">
              <div className="user-pict">
                <img src={photo.src} alt="pict"/>
              </div>
              <div className="user-block">
                <p>Имя</p>
                <p>Фамилия</p>
                <p>Класс</p>
              </div>
            </div>
            <p>What’s a good day!!!</p>
            <span className="fly"></span>
            <span className="cloud"></span>
          </div>
          <div className='container-link'>
            <div>
              <CardForNav title={ "Календарь" }
                          class={"big-card"}
                          pict={'calendarPict'}
                          link={'/calendar'}
              />
              <CardForNav title={ "Сообщение" }
                          class={"small-card"}
                          pict={'messagePict'}
                          link={'/message'}
              />
            </div>
            <div>
              <CardForNav title={ "Дневник" }
                          class={"small-card"}
                          pict={'diaryPict'}
                          link={'/diary'}
              />
              <CardForNav title={ "Библиотека" }
                          class={"big-card"}
                          pict={'booksPict'}
                          link={'/books'}
              />
            </div>
          </div>
        </div>
      </MainLayout>
      <style jsx>{`
        .wrapper-menu {
          background: linear-gradient(14.59deg, #D9CCFF 1.28%, #FFF1ED 28.09%, #FFFFFF 52.12%);
          padding: 16px 25px; 
          height: 784px;
        }
        .header-menu {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;

        }

        .logo-block {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logout {
          display: inline-flex;
          background-image: url("/logout.svg");
          background-repeat: no-repeat;
          background-position: 50%;
          border-radius: 50px;
          padding: 10px;
          border: 3px solid #72B8FF;
          width: 40px;
          height: 40px;
          cursor: pointer;
        }

        .logo {
          display: inline-block;
          background-image: url("/SCHOOL WAY.svg");
          background-repeat: no-repeat;
          background-size: 100px 48px;
          width: 100px;
          height: 48px;
        }

        .separator {
          display: inline-block;
          font-size: 31px;
          color: #72B8FF; 
          margin: 5px;
        }

        .extra-person {
          display: inline-block;
          background-image: url("/extraPerson.svg");
          background-repeat: no-repeat;
          width: 27px;
          height: 27px;
          cursor: pointer;
          margin-left: 30px;
        }

        .ring {
          display: inline-block;
          background-image: url("/Ring.svg");
          background-repeat: no-repeat;
          width: 27px;
          height: 27px;
          cursor: pointer;
          margin-left: 30px;
        }

        .user-card {
          display: flex;
          flex-direction: column;
          background: linear-gradient(305.44deg, #A18CF3 27.32%, #D9D2F5 107.15%);
          border-radius: 45px;
          padding: 40px;
          color: #EEEAFF; 
          margin: 20px 0px;
          position: relative;
          box-shadow: 0px 6px 17px rgba(67, 49, 136, 0.12);
        }

        .user-pict {
          display: flex;
          justify-content: center;
          align-items: end;
          border-radius: 50%;
          width: 140px;
          height: 140px;
          background: #EEEAFF;
          overflow: hidden;
          margin-right: 5px;
        }

        .user-info {
          display: flex;
          justify-content: space-around;
        }

        .fly {
          display: inline-block;
          position: absolute;
          top: -20px;
          background-image: url("/fly.svg");
          background-repeat: no-repeat;
          width: 54px;
          height: 34px;
        }

        .cloud {
          display: inline-block;
          position: absolute;
          bottom: -20px;
          right: 0;
          background-image: url("/cloud.svg");
          background-repeat: no-repeat;
          background-size: 150px 80px;
          width: 150px;
          height: 80px;
        }
        .container-link{
        display: flex; 
        justify-content: space-between;
        }
        .container-link div:first-child{
          //margin-right: 5px;
        }
      `}</style>
    </>
  );
}

// <div className='container-link'>
//   {mainNav.map(el => <CardForNav key={el.title}
//                                  title={el.title}
//                                  class={el.className}
//                                  pict={el.pict}
//   />)}
//   const mainNav = [
//   {
//     title:'Календарь' ,
//     className:'big-card' ,
//     pict: 'calendarPict',
//   },
//   {
//     title:'Сообщение' ,
//     className:'small-card' ,
//     pict: 'messagePict',
//   },
//   {
//     title:'Дневник' ,
//     className:'small-card' ,
//     pict: 'diaryPict',
//   },
//   {
//     title:'Библиотека' ,
//     className:'big-card' ,
//     pict: 'booksPict',
//   },
//   ]
// </div>
