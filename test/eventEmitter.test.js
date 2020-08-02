import EventEmitter from "../src/event/EventEmitter";
import Event from "../src/event/Event";

let assert = require('assert');

describe('Event', function () {
    it('checkReceivedPacket should return true', function () {

        const ee = new EventEmitter();

        ee.registerListener("test", reg)

        function reg(obj) {
            assert.equal(obj.data.n, 10);
        }

        ee.emit("test", new Event("test", {n: 10}));
    });
});