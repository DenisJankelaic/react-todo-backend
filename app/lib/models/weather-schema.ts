import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const WeatherSchema = new Schema({
  coords: {
    lon: {
      type: Number
    },
    lat: {
      type: Number
    }
  },
  weather: {
    id: {
      type: Number
    },
    main: {
      type: String
    },
    description: {
      type: String
    },
    icon: {
      type: String
    }
  },
  base: {
    type: String
  },
  main: {
    temp: {
      type: Number
    },
    pressure: {
      type: Number
    },
    humidity: {
      type: Number
    },
    temp_min: {
      type: Number
    },
    temp_max: {
      type: Number
    }
  },
  visibility: {
    type: Number
  },
  wind: {
    speed: {
      type: Number
    }
  },
  clouds: {
    all: {
      type: Number
    }
  },
  dt: {
    type: Number
  },
  sys: {
    type: {
      type: Number
    },
    id: {
      type: String
    },
    message: {
      type: String
    },
    country: {
      type: String
    },
    sunrise: {
      type: Number
    },
    sunset: {
      type: Number
    }
  },
  id: {
    type: String
  },
  name: {
    type: String
  },
  cod: {
    type: String
  }
});
