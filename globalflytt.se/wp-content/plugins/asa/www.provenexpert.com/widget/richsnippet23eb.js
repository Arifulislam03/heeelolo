(function(callback) {
    var ready = false;

    var detach = function() {
        if (document.addEventListener) {
            document.removeEventListener("DOMContentLoaded", completed);
            window.removeEventListener("load", completed);
        } else {
            document.detachEvent("onreadystatechange", completed);
            window.detachEvent("onload", completed);
        }
    };

    var completed = function() {
        if (!ready && (document.addEventListener || event.type === "load" || document.readyState === "complete")) {
            ready = true;
            detach();
            callback(document);
        }
    };

    if (document.readyState === "complete") {
        callback(document);
    } else if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", completed);
        window.addEventListener("load", completed);
    }
})(function(d) {
    var urlCss = 'https://www.provenexpert.com/css/google-stars.css';
    if (urlCss !== '') {
        var addCssElem = true;
        var linkElems = document.getElementsByTagName('link');
        for (var idx in linkElems) {
            if (linkElems[idx] !== undefined && linkElems[idx].href === urlCss) {
                addCssElem = false;
            }
        }

        if (addCssElem) {
            var $css = d.createElement('link');
            $css.type = 'text/css';
            $css.rel = 'stylesheet';
            $css.href = urlCss;
            d.getElementsByTagName('head')[0].appendChild($css);
        }
    }

    d.getElementsByClassName('pe-richsnippets')[0].innerHTML = '<!-- 3600/3600 --><a id="pe_rating" title="Kundenbewertungen &amp; Erfahrungen zu Umzugsfuchs-R&auml;umung-365. Mehr Infos anzeigen." target="_blank" href="https://www.provenexpert.com/umzugsfuchs-raeumung-365/" class="pe_g pe_l"> <span id="pe_name"> <span>Umzugsfuchs-R&auml;umung-365</span> </span> <span> <span id="pe_stars"> <span style="width: 100%;"> <span></span> hat <span><span>4,91</span> von <span>5</span> Sternen<span></span></span> </span> </span> <span class="pe_u"> <span>169</span> Bewertungen auf ProvenExpert.com </span> </span> </a> <script type="application/ld+json"> { "@context": "https://schema.org/", "@type": "Product", "name": "Umzugsfuchs-Räumung-365", "description": "Umzugsfirma, Umzugsunternehmen, Umziehen, Umzugsservice, Zügelunternehmen, Umzug", "image": "https://images.provenexpert.com/3b/2f/195042cd6a910f3f0d07fe627aed/umzugsfuchs-raeumung-365_full_1666118300.jpg", "aggregateRating": { "@type": "AggregateRating", "reviewCount": 169, "ratingValue": 4.91, "bestRating": 5 } } </script> ';
});
