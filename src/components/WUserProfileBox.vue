<template>

    <div class="blockquote">
        <div class="row">
            <div class="gAvatarMD">
                <WAvatar :avatar="avatar" :username="username" />
            </div>
            <div style="padding-left:15px; padding-top:10px;">
                <span class="gUserNameMD"> {{username}}</span>&nbsp;
                <q-btn class="gFollowBtn" icon="add_circle" dense flat ripple
                    :label="v_follow_button"
                    :loading="v_loading"
                    @click="onClickFollow(1)" v-if="! isOwner" />
            </div>
        </div>                    
        <div>
            <p class="biography"> {{v_shorten(biography)}}</p>
        </div>
    </div>
    
</template>


<script>
import { Config } from 'src/data/Config';
import { store } from 'src/store/store';
import CommonFunc from 'src/util/CommonFunc';
import logger from 'src/error/Logger';

import WAvatar from "components/w/WAvatar.vue";
import WCommandBar from "components/WCommandBar.vue";
import WRatingButton from 'components/WRatingButton';
import WSubinfo from 'components/WSubinfo';



export default {
    name: 'WUserProfileBox',
    components: {
        WAvatar,
        WRatingButton,
        WSubinfo,
        WCommandBar
    },
	props: {
        data: {
            default: null,
        },
        avatar: {
            type:String,
            default: '',
        },
        userid: {
            required: true,
            default: -1,
        },
        username: {
            required: true,
            default: '',
        },
        biography: {
            type:String,
            default: '',
        },
        isOwner: {
            required: true,
            type:Boolean,
            default: false,
        },
        shortenBiography: {
            default:"1"
        }
    },
    computed: {
        v_me() {
            return store.getters.me;
        },
        v_shorten() {
            return (value) => {
                if (this.shortenBiography=="1") {
                    return CommonFunc.shortenString(value,Config.setting.maxBiographyLength);
                }
                return value;
            };
        },
    },
    data: function () {
        return {
            v_follow_button: this.$t("button.follow"),
            v_userid: this.userid,
            v_username: this.username,
            v_avatar: this.avatar,
            v_biography: this.biography,
            v_loading: false,
        }
    },
    methods: {

        onClickFollow: function(value) {
            logger.log.debug("WUserProfileBox.onClickFollow=");
            
            const _this=this;

            CommonFunc.checkButtonPermission(this,1,0).then(ret=>{
                logger.log.debug("WUserProfileBox.onClickFollow : ret=",ret);
                if (ret==0) return;
                
                _this.v_loading = true;
                _this.v_me.follow(_this.userid,value).then( response => {
                    logger.log.debug("onClickFollow - response=",response);
                    _this.v_follow_button = this.$t("button.following");
                    _this.v_loading = false;
                    CommonFunc.showOkMessage(_this,'Followed');                
                }).catch(err=>{
                    _this.v_follow_button = this.$t("button.following");
                    _this.v_loading = false;
                    CommonFunc.showErrorMessage(_this,err.data.msg);                    
                });
            });
        }

    }

};

</script>

<style scoped>
.blockquote {  
    border: 1px solid #D8D8D8;
    border-radius: 3px;  
    border-left: 7px solid #DDDDDD;  
    padding: 12px 12px 0px 12px;  
    margin: 0px 15px 0px 15px;
} 


.biography {
   font-size:14px;
   color:#222222;
   padding-top:10px;
}


</style>