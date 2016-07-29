videojs.plugin('rendtionfiltermp4', function() {
    var myPlayer = this,
        videoID,
        totalRenditions,
        hlsAra = [],
        highestQuality;

    myPlayer.one('loadstart', function(evt) {
        videoName = myPlayer.mediainfo['name'];
        rendtionsAra = myPlayer.mediainfo.sources;
        totalRenditions = rendtionsAra.length;
        for (var i = 0; i < totalRenditions; i++) {
            if (rendtionsAra[i].container === "M2TS" && rendtionsAra[i].hasOwnProperty('src')) {
                hlsAra.push(rendtionsAra[i]);
            };
        };
        hlsAra.sort(function(a, b) {
            return b.size - a.size;
        });
        highestQuality = hlsAra[0].src;
        myPlayer.src(highestQuality);
    });
});
