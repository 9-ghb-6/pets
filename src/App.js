import { useEffect, useState } from 'react';
import Detail from './component/detail/detail';
import List from './component/list/list';

import Search from './component/search/search';

function App() {
  document.title = "유기동물 조회서비스";

  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState();
  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY;
    fetch(`https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&numOfRows=30`)
      .then(response => response.json())  // 중괄호를 사용시 즉시리턴시켜준다는 뜻이다.
      .then(json => {
        // console.log(json.respose.body.items.item);
        setPets(json.response.body.items.item)
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const handleSearch = (bgnde, endde, upr_Cd) => {
    const key = "VM4Kq0Mv0x2F3FgDpbg%2BtBok2WUsyxVtx53QPulh8Np2%2BhpgU0ks%2FpczqOSetRGnLMsEVbSn1xssdVvgyyYegA%3D%3D"
    fetch(`https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&numOfRows=30&bgnde=${bgnde}&endde=${endde}&upr_cd=${upr_Cd}`)
      .then(response => response.json())  // 중괄호를 사용시 즉시리턴시켜준다는 뜻이다.
      .then(json => {
        // console.log(json.respose.body.items.item);
        setPets(json.response.body.items.item)
        setSelected(null);
      })
      .catch(e => {
        console.log(e);
      });
  }
  // 자료 검색   // 시/도 검색


  const handleSelected = (data) => {
    setSelected(data);
  }

  // 자료 선택

  return (<>
    <div id="loading"></div>
    <div className="container">
      <Search onSearch={handleSearch} />
      <div className="app">
        {selected ? <Detail target={selected} /> : <></>}
        <List pets={pets} onSelected={handleSelected} />

      </div>

    </div>
  </>
  );
}

export default App;