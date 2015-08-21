// ==UserScript==
// @name         Mod Action Name Replacer
// @version      0.1
// @description  Chop questions into little bits and smash them with this userscript that changes all the mod action names.
// @author       ArtOfCode
// @match        *://*.stackexchange.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.askubuntu.com/*
// @match        *://*.stackapps.com/*
// @match        *://*.mathoverflow.net/*
// @run-at       document-end
// @encoding     utf-8
// @grant        none
// ==/UserScript==

var ACTIONS = [
    "protect",
    "chop into little bits",
    "convert to hamburger",
    "move happiness to sadness",
    "fold",
    "smash",
    "hammer",
    "summon greek gods",
    "show bad things",
    "summon roman gods",
    "burn with fire",
    "send to Jail",
    "bring unicorns",
    "Mjolnir"
];

function selectText() {
    var random = Math.random();
    return ACTIONS[Math.floor(random * ACTIONS.length)];
}

$("body").on("DOMNodeInserted", function(e) {
    var target = e.target;
    if($(target).hasClass("popup") && $(target).children("#tab-actions").length > 0) {
        $("span.action-name").each(function(index, elem) {
            console.log("changing");
            $(this).attr("title", $(this).text());
            $(this).html(selectText());
        });
    }
});

$(".post-menu a").css("margin-right", "5px");

$("a.close-question-link").attr("title", "close").text("stand by");

$("a[class][data-delete-prompt='Delete this post?']").attr("title", "delete").text("nuke from orbit");

$("a.flag-post-link").attr("title", "flag").text("surrender");
