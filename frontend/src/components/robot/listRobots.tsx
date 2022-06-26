import { iRobot } from '../../models/robot';
import { Robot } from './robot';
import './listRobots.css';

export function RobotList({ robots }: { robots: Array<iRobot> }) {
    const template = (
        <ul className="robotsList">
            {robots.map((robot: iRobot) => (
                <li key={robot.id}>
                    <Robot robot={robot}></Robot>
                </li>
            ))}
        </ul>
    );

    return template;
}
