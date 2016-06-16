"use strict";
 
import { Service } from "threerest";
import { Methods } from "threerest";

var Twitter = require("twitter");

@Service.path("/statuses")
export default class ServiceTwitter {

  
  
  constructor() {
  
    this.client = new Twitter({
	  "consumer_key": "",
	  "consumer_secret": "",
	  "access_token_key": "",
	  "access_token_secret": ""
	});
  }

  @Methods.get("/user_timeline")
  getStatusesUserTimeline() {

	  return new Promise((resolve, reject) => {
		  this.client.get('search/tweets', {"q": "@SQLI_ENTERPRISE"}, function(error, tweets, response){
			  if (!error) {
			  	resolve(tweets);
			  } else {
				  reject(error);
			  }
		  });
    });
  }


}
