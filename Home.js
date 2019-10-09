import React , {Component} from "react";

export class Home extends Component{
    render()
    {
        return(
            <div className="mt-5 d-flex justify-content-end">
                <marquee><h3 className="welcome">Welcome To Delivery Agent Portal</h3></marquee>
            </div>
        )
    }
}