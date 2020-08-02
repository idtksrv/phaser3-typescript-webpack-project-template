/**
 * Event is a object for EventEmitter to emit.
 */
class Event {
    constructor(event = "", data = {}) {
        this._event = event;
        this._data = data;
    }

    get event() {
        return this._event;
    }

    get data() {
        return this._data;
    }
}

export default Event;