/**
 * Author: gnomjogson
 * Date: 28.03.14
 * Created: 16:18
 **/
(function(window){

    UserProfileImages.prototype.constructor = UserProfileImages;
    UserProfileImages.prototype = {
        git_api: "https://api.github.com/users/",
        twitter_api :"../php/get_tweets.php"
    }

    var ref, $members;
    function UserProfileImages(){
        ref = this;
    };

    UserProfileImages.prototype.init = function()
    {
        $members = $('.lab-members').find('img');
        $members.each(function(i){
            var vo = {};
            vo.index = i;
            vo.uTwitter = $(this).data('username-twitter');
            vo.uGit = $(this).data('username-git');
            this.vo = vo;

            if(vo.uGit.length > 0){
                //when its a git user, we grap profile pic from here
                ref.getGitProfileImage(this);
            } else {
                if(vo.uTwitter.length > 0){
                    ref.getTwitterProfileImage(this);
                } else {
                    // haz no account anywhere
                }
            }

        });
        //console.log("$members -> " + $members.length);
    }

    UserProfileImages.prototype.getGitProfileImage = function(pImg)
    {
        //console.log("get git info for -> " + pImg.vo.uGit);
        $.getJSON(ref.git_api + pImg.vo.uGit,
            function(data){
                $(pImg).attr('src', data.avatar_url);
                //console.log("data -> " + data.avatar_url + " " + $(pImg).attr('src'));
            });
    }

    UserProfileImages.prototype.getTwitterProfileImage = function(pImg)
    {
        //console.log("get twitter info for -> " + pImg.vo.uTwitter);
        /*$.getJSON(ref.twitter_api + "?user=" + pImg.vo.uTwitter + "&size=original",
            function(data){
                //profile_image_url
                var url = data.profile_image_url;
                var _index = url.lastIndexOf(".");
                var format = url.substr(_index,url.length);
                var _index = url.lastIndexOf("_");
                var org = url.substr(0,_index) + format;
                $(pImg).attr('src', org);
            });*/
    }

    window.UserProfileImages = UserProfileImages;

}(window));
