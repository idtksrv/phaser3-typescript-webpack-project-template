/**
 * EventEmitter handles event.
 * There are register,remove,emit,once functions.
 * You can register multiple listener at the same event name.
 */
class EventEmitter {
    constructor() {
        this.events = {};
    }

    registerListener(eventName="", listener=Function) {
        if (typeof this.events[eventName] !== 'object') {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
        return () => this.removeListener(eventName, listener);
    }

    removeListener(eventName="", listener=Function) {
        if (typeof this.events[eventName] === 'object') {
            const idx = this.events[eventName].indexOf(listener);
            if (idx > -1) {
                this.events[eventName].splice(idx, 1);
            }
        }
    }

    emit(eventName, ...args) {
        if (typeof this.events[eventName] === 'object') {
            this.events[eventName].forEach(listener => listener.apply(this, args));
        }
    }

    /**
     * 只執行一次，執行完就 remove 掉。
     */
    once(eventName="", listener) {
        const remove = this.registerListener(eventName, (...args) => {
            remove();
            listener.apply(this, args);
        });
    }
}

export default EventEmitter;