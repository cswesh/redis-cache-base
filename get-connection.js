const  redis = require('redis');
const client = redis.createClient();

client.on('error',function(error){
    console.error('error encountered: ',error)
});
client.on('connect',function(error){
    console.log("redis  connection estd.")
});

client.set('ChannelName',"Swesh", redis.print);
client.get('ChannelName',redis.print);