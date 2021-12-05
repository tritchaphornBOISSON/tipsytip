import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer I2A9689a8G8RMQyDiJpOPFcW113YgMXCLNYn4XE01TD5OrebwkBvVwISnsqERMrQL_mFaM9sCZLw5e0iSN2mvsyFfRjSDuwdb-qu9wFlaW1hLT4aNcqttZYJNOcXYHYx',
  },
});
