// ==UserScript==
// @name         ForoCarros
// @namespace    https://github.com/Sercrash-git
// @version      0.0.1
// @description  Mejoras de forocoches
// @author       SerCrAsH
// @match        *.forocoches.com/foro/forumdisplay*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require      https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js
// @noframes
// @run-at       document-start
// ==/UserScript==

// Adds by Google
jQuery("head").prepend('<style type="text/css">.cajasprin { display:none !important; }</style>');

/** Script code **/
// IIFE - Immediately Invoked Function Expression
(function(scriptCode) {
    scriptCode(window.jQuery, window, document);
}(function($, window, document) {

    // DOM is ready
    $(function() {
        var execution_start_time = +new Date();
        // Init

        // Get thread's <tr>
        var $table_threads = $('#threadslist').find("[id^=threadbits]");

        // Start popovers :
        $table_threads.children().each(setPops);
        


        /*******************************************************************************************************/
        // End ready
        console.log("Successful loaded - Forocoches script by Sercrash (took "+ ( +new Date() - execution_start_time ) +" ms)");
    });
    // Independencies of DOM ready status

    /** Event mouseover on tr fields **/
    function setPops () {
        var $ttitle = $(this).find('[id^=thread_title]');

        var content = '<img src="http://abload.de/img/coche6gkdq.png" style="width: 80px; display:inline;">'+$ttitle.text();
        $ttitle.popover({
            trigger: 'hover',
            content: content ,
            title : $ttitle.text(),
            placement: 'bottom',
            html : true 
        });
    }

}
));
// End script