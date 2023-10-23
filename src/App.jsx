import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';


function App() {
  const dummyList = [
    { id: 1, input: '김아무개', textarea: '오늘의 할 일은 없습니다 퇴근해야겠습다!.', select: 20 },
    { id: 2, input: '박아무개', textarea: '오늘의 할 일은 없습니다 퇴근해야겠습다!.', select: 10 },
    { id: 3, input: '용아무개', textarea: '오늘의 할 일은 없습니다 퇴근해야겠습다!.', select: 30 },
    { id: 4, input: '최아무개', textarea: '오늘의 할 일은 없습니다 퇴근해야겠습다!.', select: 40 },
    { id: 5, input: '뵹아무개', textarea: '오늘의 할 일은 없습니다 퇴근해야겠습다!.', select: 50 },
  ];

  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList dummyList={dummyList} />
    </div>
  );
}
export default App;
