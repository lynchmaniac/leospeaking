import { Service } from "threerest";
import { Methods } from "threerest";
import { Hal } from "threerest";


@Service.path("/statuses")
export default class ServiceTwitter {

  
  
  constructor(client) {
    this.client = client;
  }

  @Methods.get("/user_timeline")
  @Hal.halServiceMethod()
  getStatusesUserTimeline() {

    var Promise = require('promise');
    var params = {q: '@SQLI_ENTERPRISE'};

  var pSendRequest  = Promise.denodeify(client.get('search/tweets', params, function(error, tweets, response){
      console.log("Hi");
      console.log(error);
      if (!error) {
         console.log(tweets);
        return tweets;
      }
    }));
  pSendRequest.done(function pReadFileFulfilled(data) {
            return data;
      }, function pReadFileRejected(err) {
          throw err;
      });

    /*return client.get('search/tweets', params, function(error, tweets, response){
      console.log("Hi");
      console.log(error);
      if (!error) {
         console.log(tweets);
        return tweets;
      }
    });*/
  }

}
