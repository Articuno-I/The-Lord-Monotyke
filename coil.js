exports.coil = {
    monoIndex: -1,
    blah: [],
    setBlah : function(input) {
        this.blah = input;
    },
    setIndex : function(input) {
        this.monoIndex = input;
    },
    getBlah : function() {
        return this.blah;
    },
    getIndex : function() {
        return this.monoIndex;
    },
}