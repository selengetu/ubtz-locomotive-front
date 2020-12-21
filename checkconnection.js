
const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function run() {

  let connection;

  try {
    connection = await oracledb.getConnection( {
      user          : "zutguur",
      password      : 'zut',
      connectString : "192.168.4.139/sdbora"
    });

    console.log('connected to db');

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();
