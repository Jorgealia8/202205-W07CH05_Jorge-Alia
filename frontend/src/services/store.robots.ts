import { iRobot } from '../models/robot';

export class HttpStoreRobots {
    url: string;
    constructor() {
        this.url = 'http://localhost:3450/robots/';
    }
    getRobots() {
        //GET
        return fetch(this.url).then((resp) => {
            return resp.json();
        });
    }

    getRobot(id: string): Promise<iRobot> {
        return fetch(this.url + `/${id}`).then((resp) => resp.json());
    }
    setRobot(robot: iRobot): Promise<iRobot> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(robot),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json());
    }
    updateRobot(robot: iRobot): Promise<Partial<iRobot>> {
        // PUT / PATCH
        return fetch(this.url + `/${robot._id}`, {
            method: 'PATCH',
            body: JSON.stringify(robot),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    deleteRobot(id: string): Promise<number> {
        // DELETE
        return fetch(this.url + `/${id}`, {
            method: 'DELETE',
        }).then((resp) => resp.status);
    }
}
