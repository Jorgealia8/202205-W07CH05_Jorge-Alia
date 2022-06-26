import { useSelector } from 'react-redux';
import { RobotList } from '../components/robot/listRobots';
import { iState } from '../store/store';

export function HomePage() {
    const robots = useSelector((store: iState) => store.robots);
    const template = (
        <>
            <main>
                <h2>Lista de robots:</h2>
                <RobotList robots={robots}></RobotList>
            </main>
        </>
    );

    return template;
}

export default HomePage;
