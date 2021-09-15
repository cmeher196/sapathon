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


// async function insert(sql) {
//     for (let i=0; i<3; i++)
//       await conn.exec(sql);
//   }

module.exports = function (){
    for (let i=0; i<3; i++){
         var sql =`insert into ${schema}.${database} values(39,44,33)`;
         conn.exec(sql);
    }
    console.log('rows inserted!!');
};

// conn.connect(conn_params, function(err) {
//     if (err) throw err;

//     console.log('Connected to HANA DB.....');
//   //  var sql =`insert into ${schema}.${database} values(55,44,33)`;
//     // conn.exec(`select * from ${schema}.${database} order by rand() limit 1`, function (err, result) {
//     //   if (err) throw err;
//     //   console.log(result);
//     insert();

//     // conn.exec(`insert into ${schema}.${database} select 15,25,34 from dummy`,(err,res)=>{
//     //     conn.exec(`select * from ${schema}.${database} limit 1`,(err,res)=>{  
//     // if(err) throw err;

//     //     console.log(res);
    
    

//     // conn.exec('insert into 2542D259EA0A4233AF3A5530751A6B16.dataiot values(32,45,26)', (err,res)=>{
//     //      if(err) throw err;

//         //  console.log('inserted 1 row');
         
//       conn.disconnect();

//   });
  // });
