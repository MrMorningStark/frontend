import { useNavigate } from "react-router-dom";
import { PORTFOLIO_ROUTES } from "../../constant/constant";
import { Circle } from "../helper/Circle";
import { Rail } from "./Rail";
import myImage from '../../img/my-image/rajat.jpg';

export const Myself = () => {

    const navigate = useNavigate();

    return <div>
        <div id="mySelfGrid" className="fullHeight grid2 c">
            <div className="mySelf-div1">
                <img src={myImage} alt="my-img"/>
            </div>
            <div className="mySelf-div2">
                <h1>Hello</h1>
                <h2>A Bit About Me</h2>
                <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <Circle text="Resume" cursor='pointer' fontSize="18px" fontWeight="500" backgroundColor="#4F8A8B" hoverCSS={{ backgroundColor: '#4C5374',boxShadow: 'rgb(38, 57, 77) 0px 10px 8px -10px' }} onClick={() => navigate(PORTFOLIO_ROUTES.resume)} />
                <Circle text="Projects" cursor='pointer' fontSize="18px" fontWeight="500" backgroundColor="#EE4266" hoverCSS={{ backgroundColor: '#4C5374',boxShadow: 'rgb(38, 57, 77) 0px 10px 8px -10px' }} onClick={() => navigate(PORTFOLIO_ROUTES.projects)} />
                <Circle text="Contact" cursor='pointer' fontSize="18px" fontWeight="500" backgroundColor="#F9E75E" hoverCSS={{ backgroundColor: '#4C5374',boxShadow: 'rgb(38, 57, 77) 0px 10px 8px -10px' }} onClick={() => navigate(PORTFOLIO_ROUTES.contact)} />
            </div>
        </div>
        <Rail />
    </div>
}