//script to fetch data from HANA DB;
//database name : iotdata
//table name : dataiot
//schema : 2542D259EA0A4233AF3A5530751A6B16
//
const hana = require('@sap/hana-client');
const conn = hana.createConnection();

var conn_params = {
    serverNode  : 'zeus.hana.prod.eu-central-1.whitney.dbaas.ondemand.com:23803',
    uid         : '2542D259EA0A4233AF3A5530751A6B16_6VEI0A6A97TI6XXNJG44DV595_RT',
    pwd         : 'Ce2zMOK2nuR-_sf1Mv_E_PdygT9wuASfdL4HJTdp.ise.YboeXjnYaGxo8h._aHjl8n-eVUH21M.xOmfDoSLF.BOcouZ2gwq25L-2.vr9tKvS8I1ksNEpf--kw1ZK-8P',
    encrypt     :    'true',
    sslValidateCertificate:'false',
};
  
const schema = '2542D259EA0A4233AF3A5530751A6B16';
const database = 'dataiot';

conn.connect(conn_params, function(err) {
    if (err) throw err;

    console.log('Connected to HANA DB.....');
    
    // conn.exec(`select * from ${schema}.${database}`, function (err, result) {
    //   if (err) throw err;
    //   console.log(result);

    conn.exec('insert into 2542D259EA0A4233AF3A5530751A6B16.dataiot values(32,45,26)', (err,res)=>{
         if(err) throw err;

         console.log('inserted 1 row');
      conn.disconnect();
    });
   });