//prebid bids

var PREBID_TIMEOUT = 3000;
var FAILSAFE_TIMEOUT = 3000;
var adUnits = [{
        code: '320x50_P1',
        mediaTypes: {
            banner: {
                sizes: [
                    [320, 100],
                    [300, 50],
                    [300, 100],
                    [320, 50]
                ]
            }
        },
        bids: [{
                bidder: 'ix',
                params: {
                    size: [320, 100],
                    siteId: "336024"
                }
            }, {
                bidder: 'ix',
                params: {
                    size: [320, 50],
                    siteId: "336024"
                }
            }, {
                bidder: 'ix',
                params: {
                    size: [300, 100],
                    siteId: "336024"
                }
            }, {
                bidder: 'ix',
                params: {
                    size: [300, 50],
                    siteId: "336024"
                }
            }, {
                bidder: "openx",
                params: {
                    unit: '540842239',
                    delDomain: 'ringieraxelspr-d.openx.net'
                }
            },
            {
                bidder: 'rubicon',
                params: {
                    siteId: "235670",
                    zoneId: "1162674",
                    accountId: "19712"
                }
            }, {
                bidder: 'criteo',
                params: {
                    networkId: '9517'
                }
            }, {
                bidder: "adform",
                params: {
                    mid: '695226',
                }
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: "15028623"
                }
            }
        ]
    }, {
        code: '320x50_P2',
        mediaTypes: {
            banner: {
                sizes: [
                    [300, 250],
                    [320, 100],
                    [300, 50],
                    [300, 100],
                    [320, 50]
                ]
            }
        },
        bids: [{
            bidder: "openx",
            params: {
                unit: '540842243',
                delDomain: 'ringieraxelspr-d.openx.net'
            }
        }, {
            bidder: 'ix',
            params: {
                size: [300, 250],
                siteId: "336025"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [300, 50],
                siteId: "336025"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [300, 100],
                siteId: "336025"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [320, 50],
                siteId: "336025"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [320, 100],
                siteId: "336025"
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
                siteId: '1033014'
            }
        }, {
            bidder: 'rubicon',
            params: {
                siteId: "235670",
                zoneId: "1162676",
                accountId: "19712"
            }
        }, {
            bidder: "adform",
            params: {
                mid: '695229',
            }
        }, {
            bidder: 'appnexus',
            params: {
                placementId: "15028625"
            }
        }]
    }, {
        code: '320x50_P3',
        mediaTypes: {
            banner: {
                sizes: [
                    [300, 250],
                    [320, 100],
                    [300, 50],
                    [300, 100],
                    [320, 50]
                ]
            }
        },
        bids: [{
            bidder: 'ix',
            params: {
                size: [300, 250],
                siteId: "336026"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [300, 50],
                siteId: "336026"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [300, 100],
                siteId: "336026"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [320, 100],
                siteId: "336026"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [320, 50],
                siteId: "336026"
            }
        }, {
            bidder: "openx",
            params: {
                mid: '540842248',
                delDomain: 'ringieraxelspr-d.openx.net'
            }
        }, {
            bidder: 'rubicon',
            params: {
                siteId: "235670",
                zoneId: "1162678",
                accountId: "19712"
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
                siteId: '1033014'
            }
        }, {
            bidder: "adform",
            params: {
                mid: '695230',
            }
        }, {
            bidder: 'appnexus',
            params: {
                placementId: "15028627"
            }
        }]
    },
    {
        code: '320x50_P4',
        mediaTypes: {
            banner: {
                sizes: [
                    [300, 250],
                    [320, 100],
                    [300, 50],
                    [300, 100],
                    [320, 50]
                ]
            }
        },
        bids: [{
            bidder: 'ix',
            params: {
                size: [300, 250],
                siteId: "336027"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [300, 50],
                siteId: "336027"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [320, 50],
                siteId: "336027"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [300, 100],
                siteId: "336027"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [320, 100],
                siteId: "336027"
            }
        }, {
            bidder: "openx",
            params: {
                unit: '540842254',
                delDomain: 'ringieraxelspr-d.openx.net'
            }
        }, {
            bidder: 'rubicon',
            params: {
                siteId: "235670",
                zoneId: "1162680",
                accountId: "19712"
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
                siteId: '1033014'
            }
        }, {
            bidder: "adform",
            params: {
                mid: '695232',
            }
        }, {
            bidder: 'appnexus',
            params: {
                placementId: "15028628"
            }
        }]
    }, {
        code: '320x50_P5',
        mediaTypes: {
            banner: {
                sizes: [
                    [300, 250],
                    [320, 100],
                    [300, 50],
                    [300, 100],
                    [320, 50]
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
            bidder: 'ix',
            params: {
                size: [300, 50],
                siteId: "402068"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [300, 100],
                siteId: "402068"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [320, 50],
                siteId: "402068"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [320, 100],
                siteId: "402068"
            }
        }, {
            bidder: "openx",
            params: {
                unit: '540842226',
                delDomain: 'ringieraxelspr-d.openx.net'
            }
        }, {
            bidder: 'rubicon',
            params: {
                siteId: "235670",
                zoneId: "1394332",
                accountId: "19712"
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
                siteId: '1033014'
            }
        }, {
            bidder: "adform",
            params: {
                mid: '695233',
            }
        }, {
            bidder: 'appnexus',
            params: {
                placementId: "15028623"
            }
        }]

    }, {
        code: '320x50_P6',
        mediaTypes: {
            banner: {
                sizes: [
                    [300, 250],
                    [320, 100],
                    [300, 50],
                    [300, 100],
                    [320, 50]
                ]
            }
        },
        bids: [{
            bidder: 'ix',
            params: {
                size: [300, 250],
                siteId: "430181"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [300, 50],
                siteId: "430181"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [300, 100],
                siteId: "430181"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [320, 50],
                siteId: "430181"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [320, 100],
                siteId: "430181"
            }
        }, {
            bidder: "openx",
            params: {
                unit: '540950263',
                delDomain: 'ringieraxelspr-d.openx.net'
            }
        }, {
            bidder: 'rubicon',
            params: {
                siteId: "235670",
                zoneId: "1493186",
                accountId: "19712"
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
                siteId: '1033014'
            }
        }, {
            bidder: "adform",
            params: {
                mid: '802268',
            }
        }, {
            bidder: 'appnexus',
            params: {
                placementId: "17835211"
            }
        }]

    }, // odavde su nove pozicije
    {
        code: '320x50_P7',
        mediaTypes: {
            banner: {
                sizes: [
                    [300, 250],
                    [320, 100],
                    [300, 50],
                    [300, 100],
                    [320, 50]
                ]
            }
        },
        bids: [{
            bidder: 'ix',
            params: {
                size: [300, 250],
                siteId: "502323"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [300, 50],
                siteId: "502323"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [300, 100],
                siteId: "502323"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [320, 50],
                siteId: "502323"
            }
        }, {
            bidder: 'ix',
            params: {
                size: [320, 100],
                siteId: "502323"
            }
        }, {
            bidder: "openx",
            params: {
                unit: '541060467',
                delDomain: 'ringieraxelspr-d.openx.net'
            }
        }, {
            bidder: 'rubicon',
            params: {
                siteId: "235670",
                zoneId: "1691574",
                accountId: "19712"
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
                siteId: '1033014'
            }
        }, {
            bidder: "adform",
            params: {
                mid: '817480',
            }
        }, {
            bidder: 'appnexus',
            params: {
                placementId: "19156403"
            }
        }]
}
];
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
        priceGranularity: customConfigObject
    });
    pbjs.requestBids({
        bidsBackHandler: initAdserver,
    });
});

function initAdserver() {
    if (pbjs.initAdserverSet) return;
    pbjs.initAdserverSet = true;
   
    googletag.cmd.push(function () {
        pbjs.que.push(function () {
            pbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh();
        });
    });
}
setTimeout(function() {
    initAdserver();
}, FAILSAFE_TIMEOUT);
