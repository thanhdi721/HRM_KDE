import React, {Component} from "react";
import Info from "./Info";
import infodata from "./InfoData";
import './css/InfoPage.css';

class InfoPage extends Component {
    render() {
        return (
            <div className="profile">
                <div className="info">
                    <h2>THÔNG TIN NHÂN VIÊN</h2>
                </div>
                <div className="data">
                    <ul>
                        {infodata.map((infos) => (
                            <Info key={infos.msvn} infos={infos}/>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default InfoPage;