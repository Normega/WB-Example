const calculateMean = data => {
    return data.reduce((a, b) => a + b, 0) / data.length;
};

const calculateSD = (data, mean) => {
    const variance = data.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / data.length;
    return Math.sqrt(variance);
};

export { calculateMean, calculateSD };
