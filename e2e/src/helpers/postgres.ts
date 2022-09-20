// import { Connection, createConnection } from 'typeorm';
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const config = require('../../ormconfig.test');

// config.entities = config.entities.map((e: string) =>
//   e.replace(/\.js/, '.ts').replace('build', 'src'),
// );

// interface IPostgresHelper {
//   connect(): Promise<void>;
//   disconnect(): Promise<void>;
//   query<T>(query: string, parameters?: any[]): Promise<T>;
// }

// class PostgressHelper implements IPostgresHelper {
//   private connection: Connection | undefined;

//   public async connect() {
//     this.connection = await createConnection(config);
//   }

//   public async disconnect() {
//     return await this.connection.close();
//   }

//   public async query<T>(query: string, parameters?: any[]): Promise<T> {
//     return await this.connection.manager.query(query, parameters);
//   }
// }

// export const postgres = new PostgressHelper();
