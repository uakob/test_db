require('dotenv').config();

const host = process.env.APP_HOST;
const port = process.env.APP_HTTP_PORT;
export const CONFIG = {
  ROOT: `http://${host}:${port}/das`,
  HOST: `${host}:${port}`,
};

// export const AUTH = {
//   USERNAME: 'admin@mati.io',
//   PASSWORD: 'adminadmin',
    
// }