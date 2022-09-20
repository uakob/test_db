
// import { SuperAgentStatic } from 'superagent';
// import { CONFIG } from './config';

// const root = CONFIG.ROOT;

// export interface Credentials {
//   username: string,
//   password: string,
// }

// export async function login(client: SuperAgentStatic, credentials: Credentials) {
//   const res = await client
//     .post(`${root}/auth/login`)
//     .send(
//       {
//         username: credentials.username,
//         password: credentials.password,
//       }
//     );

//     return res;
// }

// export async function logout(client: SuperAgentStatic) {
//   return await client
//       .post(`${root}/auth/logout`);
// }