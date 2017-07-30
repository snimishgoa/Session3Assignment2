import {CarPosition} from "./car-position"

export interface Drivable {
    start(): void;
    drive(): void;
    getPosition(): CarPosition;
}

