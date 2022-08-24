import "./item.css"

function Item({ data, onSelected }) {
    

    return (
        <div className="item" onClick={() => onSelected(data)}>
            <img src={data.filename} alt="" className="inform"/>
            
                
            <div className="inform">
            <p>
            </p>
            <p>
                    {data.orgNm}{data.happenPlace}
                </p>
                <p>
                {data.specialMark}
                </p>
            </div>
            
        </div>
      );
}

export default Item;

