import uuid from "react-uuid";
import { Circle } from "../helper/Circle";

export const Rail = () => {

    const technologies = [
        {
            title: 'react',
            icon: 'fa-brands fa-react fa-3x',
            color: '#5ed3f3',
            backgroundColor: '#FFFFFF'
        },
        {
            title: 'html5',
            icon: 'fa-brands fa-html5 fa-3x',
            color: '#FFFFFF',
            backgroundColor: '#de4b25',
            borderRadius: '0',
        },
        {
            title: 'css3',
            icon: 'fa-brands fa-css3-alt fa-3x',
            color: '#FFFFFF',
            backgroundColor: '#3595ce',
            borderRadius: '0',

        },
        {
            title: 'nodejs',
            icon: 'fa-brands fa-node-js fa-3x',
            color: '#FFFFFF',
            backgroundColor: '#6b9e67',
            borderRadius: '10px',

        },
        {
            title: 'javascript',
            icon: 'fa-brands fa-js fa-3x',
            color: '#30312e',
            backgroundColor: '#efd81d',
            borderRadius: '0',
        },
        {
            title: 'bootstrap',
            icon: 'fa-brands fa-bootstrap fa-3x',
            color: '#7710f1',
            backgroundColor: '#FFFFFF',
            borderRadius: '10px',
        },
        {
            title: 'github',
            icon: 'fa-brands fa-github fa-3x',
            color: '#212121',
            backgroundColor: '#FFFFFF'
        },
        {
            title: 'git',
            icon: 'fa-brands fa-git-alt fa-3x',
            color: '#e84d31',
            backgroundColor: '#FFFFFF',
            borderRadius: '10px',
        },

    ]



    return <div className="railBox">
        <div className="slider">
        <div className="slide-track">

            {technologies.map((technology, i) => {
                return <div key={uuid()} className="slide"> <Circle  margin="5px 50px" width={technology.width} height={technology.height} borderRadius={technology?.borderRadius} key={uuid()} title={technology.title} icon={technology.icon} color={technology.color} size="80px" backgroundColor={technology.backgroundColor} />
                </div>

            })}

        </div>

    </div>
    </div>
}