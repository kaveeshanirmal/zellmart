const Counter = require("../models/counterSchema");

async function getNextSequenceValue(sequenceName) {
    const sequence = await Counter.findByIdAndUpdate(
        sequenceName,
        { $inc: { sequence_value: 1 } },
        { new: true, upsert: true }
    );
    return sequence.sequence_value;
}

module.exports = getNextSequenceValue;
