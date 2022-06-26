import { iRobot } from '../../models/robot';
import './robot.css';

export function Robot({ robot }: { robot: iRobot }) {
    const template = (
        <>
            <p>{robot.name}</p>
            <img className="image" src={robot.image} alt="" />
        </>
    );
    return template;
}
