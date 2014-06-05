var users = {
	"_id" : Number,
	"user_email" : String, 
	"user_userid" : String,
	"user_deviceudid" : String,
	"user_regsourcetype" : String,
	"user_reglocation" :  { 
		"user_regl_latitude" : Number,
		"user_regl_longitude" : Number 
	},
	"user_password" : String,
	"user_profession" : [ Number ],
	"user_sex" : Number,
	"user_dob" : Date,
	"user_status" : String,
	"user_profileview" : Number,
	"user_profilepic" : String,
	"user_relationship" : Number,
	"user_education" : [ {		
		"user_edu_school" : String , 
		"user_edu_year" : Date } ] ,
	"user_work" : { 
		"user_work_profession" : Number , 
		"user_work_workinfo" : [ { 
			"user_work_winfo_companyname" : String , 
			"user_work_winfo_year" : Date } ] 
	},
	"user_map_currentlocation" : { 
		"latitude" : Number , 
		"longitude" : Number 
	},
	"user_profilepicurl" : String,
	"user_deleted" : Boolean,
	"user_confirmationcode" : String,
	"user_maponlinestatus" : Boolean,
	"user_mapsharelocation" : Boolean
};

var lookup = {
	"_id" : Number,
	"lkup_familytype" : String,
	"lkup_family" : String,
	"lkup_value" : String,
	"lkup_code"	: String,
	"lkup_deleted" : Boolean
};

var profession  = {
	"_id" : Number,
	"prof_profession" : String,
	"prof_deleted" : Boolean
};

var circles = {
	"_id" : Number,
	"circ_user_id" : Number,
	"circ_circle" : String,
	"circ_date"	: Date,
	"circ_deleted" : Boolean,
	"circ_type"	: Number,
	"circ_private" : Boolean
};

var post = {
	"_id" : Number,
	"post_user_id" : Number,
	"post_date" : Date,
	"post_totallikes" : Number,
	"post_totalcomments" : Number,
	"post_data" : String,
	"post_sharewithall" : Boolean,
	"post_sharedcircles" : [ Number ],
	"post_sharedpeople" : [ Number ],
	"post_deleted" : Boolean,
};

var post_comments = {
	"_id" : Number,
	"pcom_user_id" : Number,
	"pcom_post_id" : Number,
	"pcom_date" : Date,
	"pcom_comment" : String,
	"pcom_deleted" : Boolean
};

var post_likes = {
	"_id" : Number,
	"plik_post_id" : Number,
	"plik_user_id" : Number,
	"plik_like" : Boolean
};

var memory = {
	"_id" : Number,
	"memo_user_id" : Number,
	"memo_date" : Date,
	"memo_totallikes" : Number,
	"memo_totalcomments" : Number,
	"memo_data" : String,
	"memo_sharewithall" : Boolean,
	"memo_sharedcircles" : [ Number ],
	"memo_sharedpeople" : [ Number ],
	"memo_deleted" : Boolean,
	"memo_location" : { 
		"latitude" : Number , 
		"longitude" : Number 
	},
	"memo_showatcurrentlocation" :	Boolean,
	"memo_showatanylocation" : Boolean,
	"memo_locationdetails" : String	
};

var memory_comments = {
	"_id" : Number,
	"mcom_user_id" : Number,
	"mcom_memo_id" : Number,
	"mcom_date" : Date,
	"mcom_comment" : String,
	"mcom_deleted" : Boolean
};

var memory_likes = {
	"_id" : Number,
	"mlik_memo_id" : Number,
	"mlik_user_id" : Number,
	"mlik_like" : Boolean
};

var wink = {
	"_id" : Number,
	"wink_from" : Number,
	"wink_to" : Number,
	"wink_createddate" : Date,
	"wink_status" : Number,
	"wink_smil_id" : Number
};

var smilies = {
	"_id" : Number,
	"smil_scat_id" : Number,
	"smil_url" : String,
	"smil_detail" : String
};

var smilies_category = {
	"_id" = Number,	
	"scat_name" = String
};

var block_list = {
	"_id" : Number,
	"blis_blocker_user_id" : Number,
	"blis_blocked_user_id" : Number,
	"blis_unblock" : Boolean
};

var following = {
	"_id" : Number,
	"flwi_user_id" : Number,
	"flwi_following_user_id" : Number,
	"flwi_circ_id" : Number,
	"flwi_deleted" : Boolean
};

var followers = {
	"flwr_id" = Number,
	"flwr_user_id" = Number,
	"flwr_follower_user_id" = Number,
	"flwr_circ_id" = Number,
	"flwr_deleted" = Boolean
};

var viewed_me = {
	"_id" : Number,
	"vime_user_id" : Number,
	"vime_viewed_user_id" : Number,
	"vime_createddate" : Date
};

var settings = {
	"_id" : Number,
	"sett_user_id" : Number,
	"sett_showlastseendata" : Boolean,
	"sett_ntfi_receivewhen_wink_users_nearby" : Boolean,
	"sett_ntfi_receivewhen_wink_users_nearby_radius" : Number,
	"sett_ntfi_receivewhen_wink_friends_nearby" : Boolean,
	"sett_ntfi_receivewhen_wink_friends_nearby_radius" : Number,
	"sett_ntfi_friends_when_you_near_them" : Boolean,
	"sett_ntfi_recieve_when_friends_add_memories" : Boolean,
	"sett_basicinfo_show_to_all" : Boolean,
	"sett_basicinfo_show_to_friednds" : Boolean,
	"sett_viewedme_enabled" : Boolean,
	"sett_calls_enabled" : Boolean,
	"sett_maps_eabled" : Boolean,
	"sett_maps_showdistinmiles" : Boolean,
	"sett_post_disbale_postmodule" : Boolean,
	"sett_post_disbale_share" : Boolean,
	"sett_post_showtoall" : Boolean,
	"sett_post_showtofriends" : Boolean,
	"sett_memo_disbale_postmodule" : Boolean,
	"sett_memo_disbale_share" : Boolean,
	"sett_memo_showtoall" : Boolean,
	"sett_memo_showtofriends" : Boolean,
	"sett_circ_disbale_postmodule" : Boolean,
	"sett_circ_disbale_share" : Boolean,
	"sett_circ_showtoall" : Boolean,
	"sett_circ_showtofriends" : Boolean
};
