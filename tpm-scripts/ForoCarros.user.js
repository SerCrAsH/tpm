// ==UserScript==
// @name         ForoCarros
// @namespace    https://github.com/SerCrAsH/tpm
// @version      0.0.1
// @description  Mejoras de forocoches ( Chrome versión web )
// @author       SerCrAsH
// @match        *://www.forocoches.com/foro/forumdisplay*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require      https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js
// @resource     bootstrap_CSS https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css
// @resource     darktheme_CSS https://raw.githubusercontent.com/SerCrAsH/tpm/master/tpm-scripts/vendor/css/Forocoches%20dark%20style%202.0.min.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @noframes
// @run-at       document-start
// ==/UserScript==

/** Initial css reference **/
// Bootstrap 
var bootstrap_CSS = GM_getResourceText ("bootstrap_CSS");
GM_addStyle (bootstrap_CSS);
// Darktheme
var darktheme_CSS = GM_getResourceText ("darktheme_CSS");
GM_addStyle (darktheme_CSS);

/** Remove adds **/
// Adds
jQuery("head").prepend('<style type="text/css">.cajasprin { display:none !important; }</style>');

/*******************************************************************************************************/
/** Script code **/
// IIFE - Immediately Invoked Function Expression
(function(scriptCode) {
    scriptCode(window.jQuery, window, document);
}(function($, window, document) {

    // DOM is ready
    $(function() {
        var execution_start_time = +new Date();
        // Init
        /*******************************************************************************************************/
        /** Vars **/
        var $table_list = $('#threadslist');
        var $table_threads = $('#threadslist').find("[id^=threadbits]");

        /*******************************************************************************************************/
        /** Modules **/
        // Retrieve search top bar
        retrieve_search_top_bar();

        // Table_List fix
        fix_table($table_list);

        // Start popovers :
        $table_threads.children().each(setPos);

        /*******************************************************************************************************/



        /*******************************************************************************************************/
        // End ready
        console.log("Successful loaded - Forocoches script by Sercrash (took "+ ( +new Date() - execution_start_time ) +" ms)");
    });
    // Independencies of DOM ready status

    /** Funciones  **/
    // Event mouseover on tr fields
    var setPos  = function () {
        var $ttitle = $(this).find('[id^=thread_title]');
        var content = $(this).find('[id^=td_threadtitle]').prop('title');

        // Content parse
        content = '<img src="http://abload.de/img/coche6gkdq.png" style="width: 80px; display:block; margin:auto; text-align: center;">'+ content;

        $ttitle.popover({
            trigger: 'hover',
            content: content ,
            title : $ttitle.text(),
            placement: 'bottom',
            html : true 
        });
    };

    /*******************************************************************************************************/
    /** Modules functions **/
    // Retrieve search top bar
    var retrieve_search_top_bar = function(){
        var $td_search = $('tr form[name="busca"]').parent().clone();
        $td_search.addClass("form-control");
        $('#AutoNumber6').append( $td_search[0] );

    };

    // Fix table list
    var fix_table = function($target_table){
        $target_table.addClass("table table-striped table-condensed");
    };


}
));
// End script
/*******************************************************************************************************/