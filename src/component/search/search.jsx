import {useEffect,useRef} from 'react';
import "./search.css"

function Search({onSearch}) {
    const bgnde = useRef();
    const endde = useRef();
    const upr_Cd = useRef();
    const processState = useRef();
    const arr = [{
                        "orgCd": "6110000",
                        "orgdownNm": "서울특별시"
                    },
                    {
                        "orgCd": "6260000",
                        "orgdownNm": "부산광역시"
                    },
                    {
                        "orgCd": "6270000",
                        "orgdownNm": "대구광역시"
                    },
                    {
                        "orgCd": "6280000",
                        "orgdownNm": "인천광역시"
                    },
                    {
                        "orgCd": "6290000",
                        "orgdownNm": "광주광역시"
                    },
                    {
                        "orgCd": "5690000",
                        "orgdownNm": "세종특별자치시"
                    },
                    {
                        "orgCd": "6300000",
                        "orgdownNm": "대전광역시"
                    },
                    {
                        "orgCd": "6310000",
                        "orgdownNm": "울산광역시"
                    },
                    {
                        "orgCd": "6410000",
                        "orgdownNm": "경기도"
                    },
                    {
                        "orgCd": "6420000",
                        "orgdownNm": "강원도"
                    },
                    {
                        "orgCd": "6430000",
                        "orgdownNm": "충청북도"
                    },
                    {
                        "orgCd": "6440000",
                        "orgdownNm": "충청남도"
                    },
                    {
                        "orgCd": "6450000",
                        "orgdownNm": "전라북도"
                    },
                    {
                        "orgCd": "6460000",
                        "orgdownNm": "전라남도"
                    },
                    {
                        "orgCd": "6470000",
                        "orgdownNm": "경상북도"
                    },
                    {
                        "orgCd": "6480000",
                        "orgdownNm": "경상남도"
                    },
                    {
                        "orgCd": "6500000",
                        "orgdownNm": "제주특별자치도"
        }]
    
    useEffect(() => {
        const today = new Date().toISOString().slice(0, 10);
        endde.current.value = today;
    }, []);

    const searchHandle = (evt) => {
        evt.preventDefault();

        onSearch(
            bgnde.current.value.replaceAll("-", ""),
            endde.current.value.replaceAll("-", ""),
            // arr.current.value
            upr_Cd.current.value,
       
        );
    }

    const options = arr.map((elm) => {
        return <option value={elm.orgCd} key={elm.orgCd}>{elm.orgdownNm}</option>
    });


    return ( 
        <div className="search">
            <form onSubmit={searchHandle}>
                <input type="date" ref={bgnde} />
                <span> ~ </span>
                <input type="date" ref={endde}/>
                <button type="submit">🔍</button>
                <select ref={upr_Cd}>
                    {options}
                </select>

            </form>
        </div>
     );
}

export default Search;