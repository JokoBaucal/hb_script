//prebid bids

var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 2000;
pbjs.que.push(function()
{ 
pbjs.setConfig( { consentManagement: 
     { cmpApi: 'iab', //needs to be iab   
       timeout: 8000, //timeout for prebid to wait for consent in ms   
       allowAuctionWithoutConsent: true //send requests without consent?  
     } 
    });
var adUnits = [{
    code: '320x50_P1',
    mediaTypes: {
        banner: {
            sizes: [
                [320, 100]
            ]
        }
    },
    bids: [{
        bidder: 'ix',
        params: {
            size: [320, 100],
            siteId: "336039"
        }
    }, {
        bidder: "openx",
        params: {
            unit: '540842253',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    },{
        bidder: "adform",
        params: {
            mid: '699455',
        }
    }, {
        bidder: 'criteo',
        params: {
            zoneId: '1437230'
        }
    }, {
        bidder: 'luponmedia',
        params: {
            siteId: 335,
            keyId: "blic320x100"
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "236496",
            zoneId: "1166910",
            accountId: "19712"
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "15029032"
        }
    }]
}, {
    code: '320x50_P2',
    mediaTypes: {
        banner: {
            sizes: [
                [300, 250]
            ]
        }
    },
    bids: [{
        bidder: "openx",
        params: {
            unit: '540842256',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'ix',
        params: {
            size: [300, 250],
            siteId: "336040"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '699456',
        }
    },{
        bidder: 'criteo',
        params: {
            zoneId: '1437223'
        }
    }, {
        bidder: 'luponmedia',
        params: {
            siteId: 335,
            keyId: "blic300x250"
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033016'
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "236496",
            zoneId: "1166914",
            accountId: "19712"
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "15029060"
        }
    }]
}, {
    code: '320x50_P3',
    mediaTypes: {
        banner: {
            sizes: [
                [300, 250]
            ]
        }
    },
    bids: [{
        bidder: 'ix',
        params: {
            size: [300, 250],
            siteId: "336041"
        }
    }, {
        bidder: "openx",
        params: {
            unit: '540842230',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    },{
        bidder: "adform",
        params: {
            mid: '699457',
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "236496",
            zoneId: "1166918",
            accountId: "19712"
        }
    }, {
        bidder: 'luponmedia',
        params: {
            siteId: 335,
            keyId: "blic300x250"
        }
    }, {
        bidder: 'criteo',
        params: {
            zoneId: '1437223'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033016'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "15029079"
        }
    }]

}, {
    code: '320x50_P4',
    mediaTypes: {
        banner: {
            sizes: [
                [300, 250]
            ]
        }
    },
    bids: [{
        bidder: 'ix',
        params: {
            size: [300, 250],
            siteId: "336042"
        }
    }, {
        bidder: "openx",
        params: {
            unit: '540842233',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'luponmedia',
        params: {
            siteId: 335,
            keyId: "blic300x250"
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "236496",
            zoneId: "1166922",
            accountId: "19712"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '699458',
        }
    },{
        bidder: 'criteo',
        params: {
            zoneId: '1437223'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033016'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "15029105"
        }
    }]
}, {
    code: '320x50_P5',
    mediaTypes: {
        banner: {
            sizes: [
                [300, 250]
            ]
        }
    },
    bids: [{
        bidder: 'ix',
        params: {
            size: [300, 250],
            siteId: "402068"
        }
    }, {
        bidder: "openx",
        params: {
            unit: '540842236',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: "adform",
        params: {
            mid: '699459',
        }
    },{
        bidder: 'criteo',
        params: {
            zoneId: '1437223'
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "236496",
            zoneId: "1394280",
            accountId: "19712"
        }
    }, {
        bidder: 'luponmedia',
        params: {
            siteId: 335,
            keyId: "blic300x250"
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033016'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "16729905"
        }
    }]
}, {
    code: '320x50_P6',
    mediaTypes: {
        banner: {
            sizes: [
                [300, 250]
            ]
        }
    },
    bids: [{
        bidder: 'ix',
        params: {
            size: [300, 250],
            siteId: "402068"
        }
    }, {
        bidder: "openx",
        params: {
            unit: '540842236',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'criteo',
        params: {
            zoneId: '1437223'
        }
    },{
        bidder: "adform",
        params: {
            mid: '839448',
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "236496",
            zoneId: "1394280",
            accountId: "19712"
        }
    }, {
        bidder: 'luponmedia',
        params: {
            siteId: 335,
            keyId: "blic300x250"
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033016'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "16729905"
        }
    }]

}];
const customConfigObject = {
    "buckets": [{
        "precision": 2,
        "min": 0,
        "max": 4,
        "increment": 0.01
    }, {
        "precision": 2,
        "min": 4,
        "max": 8,
        "increment": 0.05
    }, {
        "precision": 2,
        "min": 8,
        "max": 20,
        "increment": 0.1
    }, {
        "precision": 2,
        "min": 21,
        "max": 99,
        "increment": 1.00
    }]


};


var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

pbjs.que.push(function () {
    pbjs.addAdUnits(adUnits);

    pbjs.setConfig({
        priceGranularity: customConfigObject,
        userSync: {
            filterSettings: {
                all: {
                    bidders: '*',
                    filter: 'include'
                }
            }
        }
    });

    pbjs.requestBids({
        bidsBackHandler: sendAdServerRequest,
    });
    pbjs.enableAnalytics([{
        provider: 'adxpremium',
        options: {
            pubId: 335,
            sid: 's333'
        }
    }]);
});


function sendAdServerRequest() {
    if (pbjs.sendAdServerRequestSent) return;
    pbjs.sendAdServerRequestSent = true;
    googletag.cmd.push(function () {
        pbjs.que.push(function () {
            pbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh();
        });
    });
}
pbjs.addAdUnits(units); 
pbjs.timeout = 2000; //smanji na 300 default ako je ovo mnogo
pbjs.requestBids({ bidsBackHandler: function(bidResponses){ }, timeout: 2000 });//smanji na 300 default ako je ovo mnogo
});