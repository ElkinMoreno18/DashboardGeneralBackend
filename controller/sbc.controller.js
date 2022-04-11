const axios = require('axios');
const https = require('https');

exports.kpisClaroPBX = (req, res) => {
	var data = JSON.stringify({});

 var config = {
  method: 'get',
  url: 'http://10.10.104.44/api/v1/kpi/current/sbc/callStats/global',
  headers: { 
    'Authorization': 'Basic aW5mc2JjLnJlc3QudXNlcjovQzsraGZtMTYmOjk=', 
    'Content-Type': 'application/json'
  },
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  data : data
};


axios(config)
.then(function (response) {
  //console.log(JSON.stringify(response.data));
  res.send([response.data.items[2], response.data.items[6], response.data.items[11], response.data.items[9] ]);
})
.catch(function (error) {
  console.log(error);
});


}