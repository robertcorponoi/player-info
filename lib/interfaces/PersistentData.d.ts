/**
 * Represents the structure of persistent data that is saved to the localStorage.
 */
export default interface PersistentData {
    /**
     * Any other data the user decides to save.
     */
    [key: string]: string;
}
