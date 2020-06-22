//load the apstag.js library
! function (a9, a, p, s, t, A, g) {
    if (a[a9]) return;

    function q(c, r) {
        a[a9]._Q.push([c, r])
    }
    a[a9] = {
        init: function () {
            q("i", arguments)
        },
        fetchBids: function () {
            q("f", arguments)
        },
        setDisplayBids: function () {},
        targetingKeys: function () {
            return []
        },
        _Q: []
    };
    A = p.createElement(s);
    A.async = !0;
    A.src = t;
    g = p.getElementsByTagName(s)[0];
    g.parentNode.insertBefore(A, g)
}("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");

//initialize the apstag.js library on the page to allow bidding
apstag.init({
    pubID: '0d79d97f-1108-428c-8926-8b56782eacb6',
    adServer: 'googletag'
});

apstag.fetchBids({
    slots: [{
            slotID: '320x50_P1',
            slotName: '/161634325/Blic_Mobile_Sport/Blic_Mobile_Sport_Esports/320x50_P1',
            sizes: [
                [320, 100]
            ]
        }, {
            slotID: '320x50_P2',
            slotName: '/161634325/Blic_Mobile_Sport/Blic_Mobile_Sport_Esports/320x50_P2',
            sizes: [
                [300, 250]
            ]
        }, {
            slotID: '320x50_P3',
            slotName: '/161634325/Blic_Mobile_Sport/Blic_Mobile_Sport_Esports/320x50_P3',
            sizes: [
                [300, 250]
            ]
        },
        {
            slotID: '320x50_P4',
            slotName: '/161634325/Blic_Mobile_Sport/Blic_Mobile_Sport_Esports/320x50_P4',
            sizes: [
                [300, 250]
            ]
        },
        {
            slotID: '320x50_P5',
            slotName: '/161634325/Blic_Mobile_Sport/Blic_Mobile_Sport_Esports/320x50_P5',
            sizes: [
                [300, 250]
            ]
        },
        {
            slotID: '320x50_P6',
            slotName: '/161634325/Blic_Mobile_Sport/Blic_Mobile_Sport_Esports/320x50_P6',
            sizes: [
                [300, 250]
            ]
        }
    ],
    timeout: 2e3
}, function (bids) {
    // set apstag targeting on googletag, then trigger the first DFP request in googletag's disableInitialLoad integration
    googletag.cmd.push(function () {
        apstag.setDisplayBids();
        //googletag.pubads().refresh();
    });
});