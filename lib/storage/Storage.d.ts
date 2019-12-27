import PersistentData from '../interfaces/PersistentData';
/**
 * A thin layer around localStorage to make it easier for PlayInfo to work with.
 */
export default class Storage {
    /**
     * A reference to the persistent data that gets saved to the localStorage.
     *
     * @property {PersistentData}
     */
    persistentData: PersistentData;
    constructor();
    /**
     * Loads the latest persistent data from the localStorage.
     */
    load(): void;
    /**
     * Saves the persistent data to the localStorage.
     */
    save(): void;
}
