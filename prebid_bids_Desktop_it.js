//prebid

var PREBID_TIMEOUT = 3000;
var FAILSAFE_TIMEOUT = 3000;
var adUnits = [{
    code: '970x90',
    mediaTypes: {
        banner: {
            sizes: [
                [970, 250],
                [728, 90],
                [970, 90]
            ]
        }
    },
    bids: [{
        bidder: 'ix',
        params: {
            size: [970, 250],
            siteId: "336021"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '698264', //970x250
        }
    }, {
        bidder: 'openx',
        params: {
            unit: '540842208',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "235620",
            zoneId: "1162662",
            accountId: "19712",
            position: "atf"
        }
    }, {
        bidder: 'criteo',
        params: {
            networkId: '9517'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033013'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "15027771"
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
        bidder: 'openx',
        params: {
            unit: '540842224',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'ix',
        params: {
            size: [300, 600],
            siteId: "336017"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '698262', //300x600
        }
    }, {
        bidder: 'criteo',
        params: {
            networkId: '9517'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033013'
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "235620",
            zoneId: "1162556",
            accountId: "19712",
            position: "atf"
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "15027727"
        }
    }]

}, {
    code: '300x250_P2',
    mediaTypes: {
        banner: {
            sizes: [
                [300, 250],
                [300, 600]
            ]
        }
    },
    bids: [{
        bidder: 'ix',
        params: {
            size: [300, 250],
            siteId: "336014"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '698263', //300x250 
        }
    }, {
        bidder: 'openx',
        params: {
            unit: '540842225',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "235620",
            zoneId: "1162652",
            accountId: "19712",
            position: "btf"
        }
    }, {
        bidder: 'criteo',
        params: {
            networkId: '9517'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033013'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "15027729"
        }
    }]

}, {
    code: '300x250_P3',
    mediaTypes: {
        banner: {
            sizes: [
                [300, 250],
                [300, 600]
            ]
        }
    },
    bids: [{
        bidder: 'ix',
        params: {
            size: [300, 250],
            siteId: "336015"
        }
    }, {
        bidder: 'openx',
        params: {
            unit: '540842227',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: "adform",
        params: {
            mid: '698265', //300x250
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "235620",
            zoneId: "1162654",
            accountId: "19712",
            position: "btf"
        }
    }, {
        bidder: 'criteo',
        params: {
            networkId: '9517'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033013'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "15027730"
        }
    }]

}, {
    code: '300x250_P4',
    mediaTypes: {
        banner: {
            sizes: [
                [300, 250],
                [300, 600]
            ]
        }
    },
    bids: [{
        bidder: 'ix',
        params: {
            size: [300, 250],
            siteId: "336016"
        }
    }, {
        bidder: 'openx',
        params: {
            unit: '540842229',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: "adform",
        params: {
            mid: '698266', //300x250
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "235620",
            zoneId: "1162656",
            accountId: "19712",
            position: "btf"
        }
    }, {
        bidder: 'criteo',
        params: {
            networkId: '9517'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033013'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "115027735"
        }
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
        bidder: 'openx',
        params: {
            unit: '540842232',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'ix',
        params: {
            size: [728, 90],
            siteId: "399716"
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "235620",
            zoneId: "1391070",
            accountId: "19712",
            position: "atf"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '698267', //728x90
        }
    }, {
        bidder: 'criteo',
        params: {
            networkId: '9517'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033013'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "16698017"
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
        bidder: 'openx',
        params: {
            unit: '540842235',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "235620",
            zoneId: "1391072",
            accountId: "19712",
            position: "btf"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '698268', //728x90
        }
    }, {
        bidder: 'criteo',
        params: {
            networkId: '9517'
        }
    }, {
        bidder: 'ix',
        params: {
            size: [728, 90],
            siteId: "399717"
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033013'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "16698022"
        }
    }]
}, {
    code: '300x250_P5',
    mediaTypes: {
        banner: {
            sizes: [
                [300, 250],
                [300, 600]
            ]
        }
    },
    bids: [{
        bidder: 'ix',
        params: {
            size: [300, 250],
            siteId: "430180"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '802198', //300x250
        }
    }, {
        bidder: 'openx',
        params: {
            unit: '540915547',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "235620",
            zoneId: "1493166",
            accountId: "19712",
            position: "btf"
        }
    }, {
        bidder: 'criteo',
        params: {
            networkId: '9517'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033013'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "18181593"
        }
    }]

}, {
    code: '300x250_P6',
    mediaTypes: {
        banner: {
            sizes: [
                [300, 250],
                [300, 600]
            ]
        }
    },
    bids: [{
        bidder: 'ix',
        params: {
            size: [300, 250],
            siteId: "449527"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '802202', //300x250
        }
    }, {
        bidder: 'openx',
        params: {
            unit: '540945084',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "235620",
            zoneId: "1536002",
            accountId: "19712",
            position: "btf"
        }
    }, {
        bidder: 'criteo',
        params: {
            networkId: '9517'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033013'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "18181668"
        }
    }]

}, {
    code: '300x250_P7',
    mediaTypes: {
        banner: {
            sizes: [
                [300, 250],
                [300, 600]
            ]
        }
    },
    bids: [{
        bidder: 'ix',
        params: {
            size: [300, 600],
            siteId: "449537"
        }
    }, {
        bidder: 'openx',
        params: {
            unit: '540945110',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "235620",
            zoneId: "1536008",
            accountId: "19712",
            position: "btf"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '802208', //300x250
        }
    }, {
        bidder: 'criteo',
        params: {
            networkId: '9517'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033013'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "18181730"
        }
    }]
}];

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];


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

//var googletag = googletag || {};
//googletag.cmd = googletag.cmd || [];
//googletag.cmd.push(function() {
//    googletag.pubads().disableInitialLoad();
//});


pbjs.que.push(function () {
    pbjs.addAdUnits(adUnits);
    pbjs.setConfig({
        priceGranularity: customConfigObject
    });
    pbjs.requestBids({
        bidsBackHandler: initAdserver,
    });
});

function sendAdserverRequest() {
    if (pbjs.adServerRequestSent) return;
    pbjs.adServerRequestSent = true;
    googletag.cmd.push(function () {
        pbjs.que.push(function () {
            pbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh();
        });
    });
}
setTimeout(function () {
    sendAdServerRequest();
}, PREBID_TIMEOUT);

/*
function initAdserver() {
    if (pbjs.initAdserverSet) return;
    pbjs.initAdserverSet = true;
    googletag.cmd.push(function () {
        pbjs.que.push(function () {
            pbjs.setTargetingForGPTAsync();
            regoogletag.pubads().refresh();
        });
    });
}
setTimeout(function () {
    initAdserver();
}, FAILSAFE_TIMEOUT);

*/
