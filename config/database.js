// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         host: env('DATABASE_HOST', 'cluster0.cjxyt.mongodb.net'),
//         srv: env.bool('DATABASE_SRV', true),
//         port: env.int('DATABASE_PORT', 27017),
//         database: env('DATABASE_NAME', 'stravaig-api'),
//         username: env('DATABASE_USERNAME', 'diganta'),
//         password: env('DATABASE_PASSWORD', 'Diganta15'),
//       },
//       options: {
//         authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
//         ssl: env.bool('DATABASE_SSL', false),
//       },
//     },
//   },
// });

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: "mongodb://diganta:Diganta15@cluster0-shard-00-00.cjxyt.mongodb.net:27017,cluster0-shard-00-01.cjxyt.mongodb.net:27017,cluster0-shard-00-02.cjxyt.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-hctssn-shard-0&authSource=admin&retryWrites=true&w=majority",
      },
    },
  },
});
