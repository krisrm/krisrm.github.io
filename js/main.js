(function(){
    $(function(){
        replaceAge();
        loadEmail();
    });
    function replaceAge() {
        //today is from the server
        if (typeof today == 'undefined'){
            return;
        }
        var birthday = new Date("November 2, 1990 00:00:00");
        var age = Math.floor((today - birthday)/3.15569e10);
        $('.age').html(age);
    }
    function loadEmail(){
        var emailAddr = "&#107;&#114;&#105;&#115;&#046;&#114;&#046;&#109;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;";
        $('.email').html(emailAddr);
        $('.email').attr("href","mailto:"+$('.email').html());
    }
})();
