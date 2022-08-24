import "./detail.css"

function Detail({ target }) {
    return (<>
        <div className="detail">

        <h2>
            {target.kindCd} {target.colorCd}
            </h2>
            <div className="tiledBackground">
                <img src={target.popfile}  alt="thumbnail" className="tiledBackground"/>
        </div>
                  <table>
                <thead>
                    <tr>
                    <th colSpan="2">
                    특징
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>접수일  </td>
                        <td>{target.happenDt}</td>
                    </tr>
                    <tr>
                        <td>발견장소  </td>
                        <td>{target.happenPlace}</td>
                    </tr>
                    <tr>
                        <td>품종 </td>
                        <td>{target.kindCd}</td>
                    </tr>
                    <tr>
                        <td>색상 </td>
                        <td>{target.colorCd}</td>
                    </tr>
                    <tr>
                        <td>나이 </td>
                        <td>{target.age}</td>
                    </tr>
                    <tr>
                        <td>체중 </td>
                        <td>{target.weight}</td>
                    </tr>
                    <tr>
                        <td>상태 </td>
                        <td>{target.processState}</td>
                    </tr>
                </tbody>
                </table>
        </div>
    </>
    )
}

export default Detail;

