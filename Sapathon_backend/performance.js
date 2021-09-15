var hana = require('@sap/hana-client');

var conn = hana.createConnection();

var conn_params = {
    serverNode  : 'zeus.hana.prod.eu-central-1.whitney.dbaas.ondemand.com:23803',
    uid         : 'DM_HDI_DB_33_CRRY7DY0PK2P1HSEG41X93IPN_RT',
    pwd         : 'Ic03JUgqRp.zNC6cD7B7-Ybo05TNZX3p34w5w5LNknKtzCc.jntVsG7X-wd_8r1D3.PeLLpZCQYqyRcLz2K5qcwCs_yrnNXgDcoBJqulTTVSTHstVHwx.vM1s-0f_xP6',
    encrypt     : 'true',
    sslValidateCertificate:'false',
};

conn.connect(conn_params, (err) =>{
    if(err) throw err;

    conn.exec('select * from DM_HDI_DB_33.performance',(err,res)=>{
        if(err) throw err;

        console.log(res[0]);
        
    })
});