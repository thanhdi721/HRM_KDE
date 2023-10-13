import React, {Component} from "react";
import HR from "./HR";
import HRData from "./HRData";

class HRPage extends Component {
    render() {
        return (
            <div className="/">
                <div className="/">
                    <ul>
                        {HRData.map((HRs) => (
                            <HR key={HRs.msvn} HRs={HRs}/>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default HRPage;