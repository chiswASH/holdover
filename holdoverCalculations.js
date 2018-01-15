let fluidType = 'TYPE I';
let precipitationArray = ['FFoIC', 'Snow_VL', 'Snow_L', 'Snow_M', 'Snow_H', 'freezing_drizzle', 'freezing_rain', 'rain_csw'];
const xah_range = ((min, max , step = 1) => {
    const arr = [];
    const totalSteps = Math.floor((max - min)/step);
    for (let ii = 0; ii <= totalSteps; ii++ ) { arr.push(ii * step + min) }
    return arr;
} );

//here will be request to the database
let tempdb = [
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
        FFoIC: [2.47, 3.02],
        Snow_VL: [2.21, 2.47],
        Snow_L: [1.20, 2.21],
        Snow_M: [0.46, 1.20],
        freezing_drizzle: [1.16, 1.31],
        freezing_rain: [0.34, 0.57],
        rain_csw: [0.00, 1.20],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(28,31),
        fluid: 100,
        FFoIC: [3.02, 3.02],
        Snow_VL: [2.09, 2.32],
        Snow_L: [1.20, 2.09],
        Snow_M: [0.49, 1.20],
        freezing_drizzle: [1.08, 1.31],
        freezing_rain: [0.46, 1.16],
        rain_csw: [0, 0],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(28,31),
        fluid: 75,
        FFoIC: [2.47, 3.02],
        Snow_VL: [2.21, 2.47],
        Snow_L: [1.20, 2.21],
        Snow_M: [0.46, 1.20],
        freezing_drizzle: [1.16, 1.31],
        freezing_rain: [0.34, 0.57],
        rain_csw: [0, 0],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(27,100),
        fluid: 50,
        FFoIC: [1.05, 2.05],
        Snow_VL: [1.05, 1.16],
        Snow_L: [0.34, 1.05],
        Snow_M: [0.19, 0.34],
        freezing_drizzle: [0.23, 0.38],
        freezing_rain: [0.15, 0.19],
        rain_csw: [0, 0],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(19,26),
        fluid: 100,
        FFoIC: [0.46, 1.27],
        Snow_VL: [1.50, 2.09],
        Snow_L: [1.08, 1.50],
        Snow_M: [0.42, 1.08],
        freezing_drizzle: [0.27, 1.16],
        freezing_rain: [0.19, 0.34],
        rain_csw: [0, 0],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(19,26),
        fluid: 75,
        FFoIC: [0.30, 1.01],
        Snow_VL: [1.50, 2.13],
        Snow_L: [1.05, 1.50],
        Snow_M: [0.34, 1.05],
        freezing_drizzle: [0.19, 0.53],
        freezing_rain: [0.19, 0.34],
        rain_csw: [0, 0],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(15,17),
        fluid: 100,
        FFoIC: [0.46, 1.27],
        Snow_VL: [1.39, 1.54],
        Snow_L: [1.01, 1.39],
        Snow_M: [0.38, 1.01],
        freezing_drizzle: [0.27, 1.16],
        freezing_rain: [0.19, 0.34],
        rain_csw: [0, 0],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(15,17),
        fluid: 75,
        FFoIC: [0.30, 1.01],
        Snow_VL: [1.50, 2.13],
        Snow_L: [1.05, 1.50],
        Snow_M: [0.34, 1.05],
        freezing_drizzle: [0.19, 0.53],
        freezing_rain: [0.19, 0.34],
        rain_csw: [0, 0],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(8,13),
        fluid: 100,
        FFoIC: [0.46, 1.27],
        Snow_VL: [1.39, 1.54],
        Snow_L: [1.01, 1.39],
        Snow_M: [0.38, 1.01],
        freezing_drizzle: [0, 0],
        freezing_rain: [0, 0],
        rain_csw: [0, 0],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(8,13),
        fluid: 75,
        FFoIC: [0.30, 1.01],
        Snow_VL: [1.50, 2.13],
        Snow_L: [1.05, 1.50],
        Snow_M: [0.34, 1.05],
        freezing_drizzle: [0, 0],
        freezing_rain: [0, 0],
        rain_csw: [0, 0],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(1,6),
        fluid: 100,
        FFoIC: [0.23, 0.38],
        Snow_VL: [0.57, 1.20],
        Snow_L: [0.15, 0.57],
        Snow_M: [0.05, 0.15],
        freezing_drizzle: [0, 0],
        freezing_rain: [0, 0],
        rain_csw: [0, 0],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(-12,-1),
        fluid: 100,
        FFoIC: [0.23, 0.38],
        Snow_VL: [0.23, 0.34],
        Snow_L: [0.07, 0.23],
        Snow_M: [0.02, 0.07],
        freezing_drizzle: [0, 0],
        freezing_rain: [0, 0],
        rain_csw: [0, 0],
        Snow_H: [0, 0]
    },
    {
        temp: xah_range(-19,-14),
        fluid: 100,
        FFoIC: [0.23, 0.38],
        Snow_VL: [0.15, 0.23],
        Snow_L: [0.05, 0.15],
        Snow_M: [0.01, 0.05],
        freezing_drizzle: [0, 0],
        freezing_rain: [0, 0],
        rain_csw: [0, 0],
        Snow_H: [0, 0]
    }

]
function hoCalculation(ftype, precip, temp) {
    checkTemp(temp) 
        .then(resolve => filterPrep(resolve, precip, temp))
        .then(resolve => takeBest(resolve, ftype))
        .then(resolve => console.log(resolve))
        .catch(err => console.log(err));  
}
function checkTemp(temp) {
    let filteredByTemp = tempdb.filter((item) => !(item['temp'].indexOf(temp) === -1));
    return new Promise((resolve, reject) => {
        return resolve(filteredByTemp);
    }) 
}
function filterPrep(array, precipType, temperature) {
    return array.map((item) => {
        let {temp, fluid} = item;
        const value = item[precipType];
        let newItem = {
            temp,
            fluid,
            value
        }
        if(temperature >= 32 && precipType === 'rain_csw') {
            newItem.message = 'If Cold soaked wings';
        }
        if(value[0] === 0 && value[0] === 0) {
            newItem.caution = 'Caution: no guidelines exist';
        }
        return newItem;
    });
}
function takeBest(array, ftype) {
    array.sort(comparator);
    const { 
        fluid: concentration,
        value: holdovertime,
        message,
        caution 
    } = array[0];
    
    let object = {
        ftype,
        concentration,
        holdovertime,
        message,
        caution
    }
    //not sure it is necessary keep undefined fields
    if (!object.caution) delete object.caution;
    if (!object.message) delete object.message;
    return object;

    //return JSON.stringify(object);
}
function comparator(a, b) {
    if (a.value[0] > b.value[0]) {
        return -1;
        } else if (a.value[0] < b.value[0]) {
            return 1;
        } else if (a.value[1] > b.value[1]){
            return -1;
        } else if (a.value[1] < b.value[1]) {
            return 1;
        }
}

hoCalculation(fluidType, precipitationArray[0], 33, tempdb);


