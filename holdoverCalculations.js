let fluidType = 'TYPE I';
let precipitationArray = ['Freezing Fog', 'Snow', 'Freezing Drizzle', 'Light Freezing Rain', 'Rain'];
const xah_range = ((min, max , step = 1) => {
    const arr = [];
    const totalSteps = Math.floor((max - min)/step);
    for (let ii = 0; ii <= totalSteps; ii++ ) { arr.push(ii * step + min) }
    return arr;
} );

let db = [
    {
        temp: xah_range(32,100),
        fluid: 100,
        FFoIC: [3.02, 3.02],
        Snow_VL: [2.09, 2.32],
        Snow_L: [1.20, 2.09],
        Snow_M: [0.49, 1.20],
        freezing_drizzle: [1.08, 1.31],
        freezing_rain: [0.46, 1.16],
        rain_csw: [0.11, 1.16],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(32,100),
        fluid: 75,
        FFoIC: [3.02, 3.02],
        Snow_VL: [2.09, 2.32],
        Snow_L: [1.20, 2.09],
        Snow_M: [0.49, 1.20],
        freezing_drizzle: [1.08, 1.31],
        freezing_rain: [0.46, 1.16],
        rain_csw: [0.11, 1.16],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(32,100),
        fluid: 100,
        FFoIC: [3.02, 3.02],
        Snow_VL: [2.09, 2.32],
        Snow_L: [1.20, 2.09],
        Snow_M: [0.49, 1.20],
        freezing_drizzle: [1.08, 1.31],
        freezing_rain: [0.46, 1.16],
        rain_csw: [0.11, 1.16],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(32,100),
        fluid: 100,
        FFoIC: [3.02, 3.02],
        Snow_VL: [2.09, 2.32],
        Snow_L: [1.20, 2.09],
        Snow_M: [0.49, 1.20],
        freezing_drizzle: [1.08, 1.31],
        freezing_rain: [0.46, 1.16],
        rain_csw: [0.11, 1.16],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(32,100),
        fluid: 100,
        FFoIC: [3.02, 3.02],
        Snow_VL: [2.09, 2.32],
        Snow_L: [1.20, 2.09],
        Snow_M: [0.49, 1.20],
        freezing_drizzle: [1.08, 1.31],
        freezing_rain: [0.46, 1.16],
        rain_csw: [0.11, 1.16],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(32,100),
        fluid: 100,
        FFoIC: [3.02, 3.02],
        Snow_VL: [2.09, 2.32],
        Snow_L: [1.20, 2.09],
        Snow_M: [0.49, 1.20],
        freezing_drizzle: [1.08, 1.31],
        freezing_rain: [0.46, 1.16],
        rain_csw: [0.11, 1.16],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(32,100),
        fluid: 100,
        FFoIC: [3.02, 3.02],
        Snow_VL: [2.09, 2.32],
        Snow_L: [1.20, 2.09],
        Snow_M: [0.49, 1.20],
        freezing_drizzle: [1.08, 1.31],
        freezing_rain: [0.46, 1.16],
        rain_csw: [0.11, 1.16],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(32,100),
        fluid: 100,
        FFoIC: [3.02, 3.02],
        Snow_VL: [2.09, 2.32],
        Snow_L: [1.20, 2.09],
        Snow_M: [0.49, 1.20],
        freezing_drizzle: [1.08, 1.31],
        freezing_rain: [0.46, 1.16],
        rain_csw: [0.11, 1.16],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(32,100),
        fluid: 100,
        FFoIC: [3.02, 3.02],
        Snow_VL: [2.09, 2.32],
        Snow_L: [1.20, 2.09],
        Snow_M: [0.49, 1.20],
        freezing_drizzle: [1.08, 1.31],
        freezing_rain: [0.46, 1.16],
        rain_csw: [0.11, 1.16],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(32,100),
        fluid: 100,
        FFoIC: [3.02, 3.02],
        Snow_VL: [2.09, 2.32],
        Snow_L: [1.20, 2.09],
        Snow_M: [0.49, 1.20],
        freezing_drizzle: [1.08, 1.31],
        freezing_rain: [0.46, 1.16],
        rain_csw: [0.11, 1.16],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(32,100),
        fluid: 100,
        FFoIC: [3.02, 3.02],
        Snow_VL: [2.09, 2.32],
        Snow_L: [1.20, 2.09],
        Snow_M: [0.49, 1.20],
        freezing_drizzle: [1.08, 1.31],
        freezing_rain: [0.46, 1.16],
        rain_csw: [0.11, 1.16],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(32,100),
        fluid: 100,
        FFoIC: [3.02, 3.02],
        Snow_VL: [2.09, 2.32],
        Snow_L: [1.20, 2.09],
        Snow_M: [0.49, 1.20],
        freezing_drizzle: [1.08, 1.31],
        freezing_rain: [0.46, 1.16],
        rain_csw: [0.11, 1.16],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(32,100),
        fluid: 100,
        FFoIC: [3.02, 3.02],
        Snow_VL: [2.09, 2.32],
        Snow_L: [1.20, 2.09],
        Snow_M: [0.49, 1.20],
        freezing_drizzle: [1.08, 1.31],
        freezing_rain: [0.46, 1.16],
        rain_csw: [0.11, 1.16],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(32,100),
        fluid: 100,
        FFoIC: [3.02, 3.02],
        Snow_VL: [2.09, 2.32],
        Snow_L: [1.20, 2.09],
        Snow_M: [0.49, 1.20],
        freezing_drizzle: [1.08, 1.31],
        freezing_rain: [0.46, 1.16],
        rain_csw: [0.11, 1.16],
        Snow_H: [0, 0]
    }

]



function hoCalculation(ftype, precip, temp, intensity) {
    switch (precip[0]) {
        case 'Freezing Fog':
        checkTemp(temp).then((resolve) => {});
            break;
        case 'Snow':
        checkIntensity(intensity).then(() => checkTemp(temp)).catch(err => console.log(err));
            break;
        case 'Freezing Drizzle':
        checkTemp(temp).then((resolve) => {});
            break;
        case 'Light Freezing Rain':
        checkTemp(temp).then((resolve) => {});
            break;
        case 'Rain':
        checkTemp(temp).then((resolve) => {});
            break;
        default:
            break;        
    }
}

function checkTemp(temp) {
    return new Promise()
}

function checkIntensity(intensity){
    return new Promise()
}

console.log(db[0]);