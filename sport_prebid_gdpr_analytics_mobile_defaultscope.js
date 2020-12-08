//prebid

var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 2000;
pbjs.que = pbjs.que || [];
  pbjs.que.push(function()
                {
    pbjs.setConfig( { consentManagement:
                     { cmpApi: 'iab', //needs to be iab
                       timeout: 8000, //timeout for prebid to wait for consent in ms
                       defaultGdprScope: true
                     }
                    });

var adUnits = [{
    code: '970x90',
    mediaTypes: {
        banner: {
            sizes: [
                [970, 250]
            ]
        }
    },
    bids: [{
        bidder: 'ix',
        params: {
            size: [970, 250],
            siteId: "336036"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '699449',
        }
    }, {
        bidder: "openx",
        params: {
            unit: '540842228',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "236486",
            zoneId: "1166902",
            accountId: "19712"
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033015'
        }
    }, {
        bidder: 'criteo',
        params: {
            zoneId: '1437229'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "15028916"
        }
    }]

}, {
    code: '300x250_P1',
    mediaTypes: {
        banner: {
            sizes: [
                [300, 600],
                [300, 250]
            ]
        }
    },
    bids: [{
            bidder: "openx",
            params: {
                unit: '540842231',
                delDomain: 'ringieraxelspr-d.openx.net'
            }
        }, {
            bidder: "adform",
            params: {
                mid: '699448',
            }
        }, {
            bidder: 'luponmedia',
            params: {
                siteId: 335,
                keyId: "blic300x250"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [300, 600],
                siteId: "336032"
            }
        }, {
            bidder: 'connectad',
            params: {
                networkId: '10047',
                siteId: '1033015'
            }
        }, {
            bidder: 'criteo',
            params: {
                zoneId: '1437227'
            }
        },
        {
            bidder: 'rubicon',
            params: {
                siteId: "236486",
                zoneId: "1166880",
                accountId: "19712"
            }
        }, {
            bidder: 'appnexus',
            params: {
                placementId: "15028826"
            }
        }
    ]

}, {
    code: '300x250_P2',
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
            siteId: "336029"
        }
    }, {
        bidder: "openx",
        params: {
            unit: '540842234',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: "adform",
        params: {
            mid: '699450',
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
            siteId: "236486",
            zoneId: "1166868",
            accountId: "19712"
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
            siteId: '1033015'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "15028786"
        }
    }]

}, {
    code: '300x250_P3',
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
            siteId: "336030"
        }
    }, {
        bidder: "openx",
        params: {
            unit: '540842237',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: "adform",
        params: {
            mid: '699452',
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "236486",
            zoneId: "1166876",
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
            siteId: '1033015'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "15028796"
        }
    }]

}, {
    code: '300x250_P4',
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
            siteId: "336031"
        }
    }, {
        bidder: "openx",
        params: {
            unit: '540842240',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: "adform",
        params: {
            mid: '699454',
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
            siteId: "236486",
            zoneId: "1166878",
            accountId: "19712"
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
            siteId: '1033015'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "15028816"
        },
    }]

}, {
    code: 'Under_Article_1',
    mediaTypes: {
        banner: {
            sizes: [
                [728, 90]
            ]
        }
    },
    bids: [{
        bidder: "openx",
        params: {
            unit: '540842245',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "236486",
            zoneId: "1394334",
            accountId: "19712"
        }
    }, {
        bidder: 'ix',
        params: {
            size: [728, 90],
            siteId: "402071"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '699475',
        }
    }, {
        bidder: 'criteo',
        params: {
            zoneId: '1437224'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033015'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "16729955"
        }
    }]

}, {
    code: 'Under_Article_2',
    mediaTypes: {
        banner: {
            sizes: [
                [728, 90]
            ]
        }
    },
    bids: [{
        bidder: "openx",
        params: {
            unit: '540842250',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "236486",
            zoneId: "1394336",
            accountId: "19712"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '699476',
        }
    }, {
        bidder: 'criteo',
        params: {
            zoneId: '1437224'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033015'
        }
    }, {
        bidder: 'ix',
        params: {
            size: [728, 90],
            siteId: "402074"
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "16729956"
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