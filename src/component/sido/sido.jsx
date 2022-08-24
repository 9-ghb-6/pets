import { useEffect, useRef } from 'react';
import "./sido.css"

function Sido({ onsido }) {
    const upr_cd = useRef();
        
    useEffect(() => {
        let orgCd1 = useRef();
        orgCd1 = upr_cd.current.value
        
    }, [])
    
    
        return (
            <div className="pets">
        <select>
            <option value="">--지역선택--</option>
            <option value="upr_cd"></option>
        </select>
    </div>
)
}

export default Sido;