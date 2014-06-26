var app = app || {};

$(function() {
    var sampleCollection = [
    {
      "title":"Doge",
      "format":"jpg",
      "imageUrl":"images/ph-doge.jpg",
      "emotion":"wow",
      "keywords":"doge, coin, wow, such",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/26/2014"
    },
    {
      "title":"Lego San Francisco",
      "format":"jpg",
      "imageUrl":"http://i.imgur.com/v4eDp77.jpg",
      "emotion":"intricate",
      "keywords":"lego, sf, san francisco",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/3/2014"
    },
    {
      "title":"Doge",
      "format":"jpg",
      "imageUrl":"images/ph-doge.jpg",
      "emotion":"wow",
      "keywords":"doge, coin, wow, such",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/26/2014"
    },
    {
      "title":"Lego San Francisco",
      "format":"jpg",
      "imageUrl":"http://i.imgur.com/v4eDp77.jpg",
      "emotion":"intricate",
      "keywords":"lego, sf, san francisco",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/3/2014"
    }
    ];

    var itemCollection = [
    
    {
      "title":"Doge",
      "format":"jpg",
      "imageUrl":"images/ph-doge.jpg",
      "emotion":"wow",
      "keywords":"doge, coin, wow, such",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/26/2014"
    },
    {
      "title":"Lego San Francisco",
      "format":"jpg",
      "imageUrl":"http://i.imgur.com/v4eDp77.jpg",
      "emotion":"intricate",
      "keywords":"lego, sf, san francisco",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/3/2014"
    },
    {
      "title":"Cubes",
      "format":"gif",
      "imageUrl":"http://i.imgur.com/9BHjHmm.gif",
      "emotion":"satisfying",
      "keywords":"perfect loop, minimal, oddly satisfying",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/1/2014"
    },
    {
      "title":"That doesn't make sense",
      "format":"gif",
      "imageUrl":"http://i.imgur.com/c1YaAGR.gif",
      "emotion":"confused",
      "keywords":"confused, cartoon, funny",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/4/2014"
    },
    {
      "title":"Wink",
      "format":"gif",
      "imageUrl":"http://i.imgur.com/94QNqJm.gif",
      "emotion":"flirty",
      "keywords":"wink, funny, jennifer lawrence",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/5/2014"
    },
    {
      "title":"Lucille Wink",
      "format":"gif",
      "imageUrl":"http://replygif.net/i/715.gif",
      "emotion":"flirty",
      "keywords":"wink, funny, lucille, arrested development",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/6/2014"
    },
    {
      "title":"What the fuck are you doing cat",
      "format":"gif",
      "imageUrl":"http://i.imgur.com/bazqF.gif",
      "emotion":"wtf",
      "keywords":"wtf, cat",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/7/2014"
    },
    {
      "title":"Sportsball",
      "format":"clothing",
      "imageUrl":"https://cottonbureau.com/products/sportsball?utm_content=buffer791ad&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer",
      "emotion":"ironic",
      "keywords":"funny, sportsball, ironic, sports",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/8/2014"
    },
    {
      "title":"Make it work spaz",
      "format":"gif",
      "imageUrl":"http://media.tumblr.com/fc73c134f49433879e8b1f73f380cf42/tumblr_inline_n0hs1roiKF1s3cs22.gif",
      "emotion":"funny",
      "keywords":"tim gunn, fashion, make it work",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/9/2014"
    },
    {
      "title":"Awkward smartphone photos",
      "format":"gif",
      "imageUrl":"http://i.lvme.me/j41hffl.gif",
      "emotion":"awkward",
      "keywords":"awkward, seal, smartphone, photos",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/10/2014"
    },
    {
      "title":"Roman candle to the face",
      "format":"gfycat",
      "imageUrl":"http://gfycat.com/AbsoluteRewardingAntelopegroundsquirrel",
      "emotion":"hubris",
      "keywords":"hold my beer, roman candle, captain america",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/11/2014"
    },
    {
      "title":"Out the window",
      "format":"gif",
      "imageUrl":"http://i.imgur.com/vGT2QhK.gif",
      "emotion":"abandon",
      "keywords":"jump, out the window, action",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/12/2014"
    },
    {
      "title":"Keytar",
      "format":"png",
      "imageUrl":"http://i.imgur.com/HVD0U.png",
      "emotion":"funny",
      "keywords":"keytar, platypus, beaver, duck, venn diagram",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/13/2014"
    },
    {
      "title":"Horsemask Thumbs Up",
      "format":"gif",
      "imageUrl":"http://i.imgur.com/vUJBo79.gif",
      "emotion":"congratulations",
      "keywords":"horse mask, horsemask, thumbs up",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/14/2014"
    },
    {
      "title":"Lizard Heh",
      "format":"gif",
      "imageUrl":"http://i.imgur.com/meftV0q.gif",
      "emotion":"funny",
      "keywords":"lizard, heh, lol, funny",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/15/2014"
    },
    {
      "title":"Dog chasing lead",
      "format":"gif",
      "imageUrl":"http://i.imgur.com/zyPiTOc.gif",
      "emotion":"funny",
      "keywords":"dog, chase, lease, tree",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/16/2014"
    },
    {
      "title":"Roll",
      "format":"gif",
      "imageUrl":"http://i.imgur.com/X46836q.gif",
      "emotion":"satisfying",
      "keywords":"perfect loop, oddly satisfying, minimal",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/17/2014"
    },
    {
      "title":"Roll2",
      "format":"gif",
      "imageUrl":"http://38.media.tumblr.com/2f18241385057e97bb666960fa5eebe8/tumblr_n62npjOu1P1tyh2eso1_400.gif",
      "emotion":"satisfying",
      "keywords":"perfect loop, oddly satisfying, minimal",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/18/2014"
    },
    {
      "title":"Concentric semi circle lines wave",
      "format":"gif",
      "imageUrl":"https://31.media.tumblr.com/8f648ca8b5cb7848c66706c68d7fed54/tumblr_n7f9955y7h1shpedgo1_500.gif",
      "emotion":"satisfying",
      "keywords":"perfect loop, oddly satisfying, minimal, wave",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/19/2014"
    },
    {
      "title":"Opening a bottle of water",
      "format":"gif",
      "imageUrl":"http://i.imgur.com/6AM39pw.gif",
      "emotion":"funny",
      "keywords":"stupid, soccer, funny, water, bottle",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/20/2014"
    },
    {
      "title":"Bike Thief",
      "format":"gif",
      "imageUrl":"http://i.imgur.com/NdqOBUc.gif",
      "emotion":"funny",
      "keywords":"bike, thief, unicycle, unexpected",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/22/2014"
    },
    {
      "title":"End conversation, Mary Poppins",
      "format":"gif",
      "imageUrl":"http://i.imgur.com/OgHoAsq.gif",
      "emotion":"funny",
      "keywords":"mary poppins, end, conversation, umbrella, editingandlayout, shut up",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/23/2014"
    },
    {
      "title":"Drama plus Drama",
      "format":"gif",
      "imageUrl":"http://i.imgur.com/8gfuy48.gif",
      "emotion":"tip",
      "keywords":"drama, tim gunn, editingandlayout",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/23/2014"
    },
    {
      "title":"Headache",
      "format":"gif",
      "imageUrl":"http://i.imgur.com/taVQbOF.gif",
      "emotion":"funny",
      "keywords":"headache, charlie, always sunny in philadelphia",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/23/2014"
    },
    {
      "title":"Taco Maracas",
      "format":"gif",
      "imageUrl":"http://i.imgur.com/XmEj0wY.jpg",
      "emotion":"funny",
      "keywords":"taco, maracas",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/23/2014"
    },
    {
      "title":"Rocky Hug",
      "format":"gif",
      "imageUrl":"http://i.imgur.com/q8Ga9X5.gif",
      "emotion":"funny",
      "keywords":"bro, frolick, rocky, hug",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/23/2014"
    },
    {
      "title":"Launch day",
      "format":"gif",
      "imageUrl":"http://bukk.it/launchday.gif",
      "emotion":"funny",
      "keywords":"web site, launch, webdev",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/24/2014"
    },
    {
      "title":"Pure Imagination - Willy Wonka",
      "format":"video",
      "imageUrl":"https://www.youtube.com/watch?v=r2pt2-F2j2g",
      "emotion":"whimsical",
      "keywords":"willy wonka, pure imagination, come with me",
      "isBroken":"FALSE",
      "fallbackUrl":"",
      "dateAdded":"6/24/2014"
    }];

    new app.GridView( sampleCollection );
});