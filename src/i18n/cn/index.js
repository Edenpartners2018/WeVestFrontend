// This is just an example,
// so you can safely delete all default props below

export default {
	table: {
		selectedRecords: "selectedRecords",
	},

	menu: {
		home: "WeVest",
		about: "概况",
		news: "新闻",
		feeds: "帖子",
		asset: "资产",
		portfolio: "资产组合",
		about_wevest: "关于我们?",
	},

	name: {
		binance: "Binance",
		upbit: "UPbit",
		bithumb: "bithumb",
		blog: 'Blog',
		d1: "1 日",
		w1: "1 周",
		m1: "1 个月",
		m3: "3 个月",
		m6: "6 个月",
		y1: "1 年",
		y3: "3 年",
		y5: "5 年",
		y10: "10 年",
		all: "全",
		sector: "Sector",
		coin: "Coin",
		gold: "Gold",
		btc: "Bitcoin",
		bitcoin: "Bitcoin",
		wti: "WTI",
		bond: "US bonds",
		usd: "美元",
		nyse: "NYSE",
		bb_upper: "阻力价位",
		bb_lower: "支撑线",
		bb_mid: "流动平均数",
		kpremium: "KPremium",
		tv: "交易量",
		alt: "alt coin",
		intro: "导言",
		fundamental: "基本因素",
		price: "价格",
		subscriber_count: "订阅人数",
		language: "语言",
		watcher_count: "观察家数",
		forks_count: "forks count",
		comments: "议论",
		commit_count: "落实计数",
		description: "说明",
		created_at: "created at",
		pushed_at: "pushed at",
		info: "信息",
		trade_date: "交易日",
		tweet: 'Tweet',
		qa : 'QA',
		review: '评审',
		investor: "投资者",
		development: "开发",
		name: "名",
		total_return: "总回报率",
		avg_roi: "Avg ROI",
		avg_total_return: "Avg Total Return",
		homepage: "首页",
		no_bookmark: "没有书签",
		no_bookmark_desc : "",
		count: "总说",		
		volume_surge: "Volume surge",
		volume_change: "Volme change",
		index: "索引",
		dev_score: "开发",
		price_score: "价格",
		volume_score: "交量",
		rank: "排列",
		roi: "ROI",
		avg_holding: "Avg Holding Period",
		follower: "粉丝",
		following: "关注",
		portfolio_description: "资产组合撮要;",
		estimated_value: "Estimated Price",
		current_price: "Current Price",
		symbol: "Symbol",
		date_added: "Listing date",
		blog_writing: "Please share your knowledge!",
		comment_writing: "Please leave a comment!",
		tweet_writing: "Tweet write...",
		qa_writing: "Ask anything!",
		question_title: "Write down the title!",
		reward: "reward",
		your_rating: "Your rating?",
		review_login: "Why do you think so?",
		review_logout: "Please login first!",
		type_something: "Fill in the blank, please!",
		platform: "平台",
		chat: "Chat",
		twitter: "Twitter",
		website: "网站",
		source_codes: "源代码 ",
		token_address: "代币地址",
		circulating_supply:"供应量",
		total_supply: "总供给",
		max_supply: "最大供应量",
		
		market_capital:"试产资本",
		new_listing: "新资产",		
		price_surge: "获得者",

		price_prev: "price prev.",
		price_high: "高",
		price_low: "低",
		price_open: "开",
		price_close:"关",
		volume:"成交量",

		crypto_vc:'Crypto VC LIST',
		good_roi:'Profitable',
		trending:'趋势',

		latest_news:'最新',
		trending_news:'趋势',
		comments_news:'帖子',

		price_forecast: "您是否考虑过这个资产?",
		
		no_follower:"您有粉丝的话会看到粉丝",
		no_following:"当你有下列内容时，您会看到一下内容",
		no_userfeed:"当您的粉丝写某些东西，您会看到内容",
		no_portfolio:"当您有投资组合时，会看到投资组合",
		
		no_blogpost:"无内容",
		no_blogpost_desc:"您会投稿博客，将能看内容",

		no_qa:"没有问题",
		no_qa_desc:"如果出现问题，将显示问题",

		no_review:"没有评审",
		no_review_desc:"发表评论时显示评论。",		

		no_tweet:"没有 Tweets",
		no_tweet_desc:"发Tweets时会显示Tweets",		
	},
	
	page:{	
		login : {
			title : '登录',
			input : {
				error : '错误用户名或密码',
			},
			username : {
				title : '用户名',
			},
			password : {
				title : '密码',
			},
			signedin : {
				title : '维持登录',
			},
			forgot_password : {
				title : '忘记密码',
			}				
		},
		forgot_password : {
				title : '忘记密码',
				desc : '',
				rules : {
					title : '请输入已登记的邮件'
				},
				email : {
					error : '确认邮件地址'
				},
				expire : {
					title : '代码将过期'
				},
		},
		signup : {
			title : '注册',
			email : {
				title : '邮件',
				error : '邮件无效',
				error2 : '该邮件已注册',
			},
			username : {
				title : '用户名',
				error : '用户名无效， 请输入数字和文字',
				error2 : '该用户名已注册',
			},
			password :{
				title : '设置密码',
				error : '请输入至少8个字符',
			},
			password_confirm : {
				title : '密码确认',
				error : '密码不一致', 
			},
			code: {
				title: '认证代码',
				error : '请输入6位数的认证代码', 
			}
		},
 		
		home:{
			title : '首页',
			desc :'',
			
			marketindex: {
				title : 'BTC，ETH 检测加密加密货币市场',
				desc : ''
			},
			marketwatching : {
				title : 'market risk alarm',
				desc : ''
			},
			blog: {
                title:'通过新闻和博客提高竞争力'
            },
			portfolio: {
				title:'发现有前途的资产，开始复制投资',
				desc: ''
			},
			community : {
				title : '加密货币的论坛',
				desc : '',
			},
			asset : {
				title : '寻找GEM',
				desc : '',
			},
			captain: {
				title : '关注你我',
				desc : '',
			},
			userfeed: {
				title:'Activities from your Followings',
				desc:''				
			},
				roi: {
					title:'high roi portfolio',
					desc:''
				},
				highvoted: {
					title:'favorite portfolio',
					desc:''
			},
						
		},
		activation : {
			title: 'Sign Up Activation',
			desc : '',
			mail_sent : {
				title : 'Activation Mail Sent',
				desc : 'Please check your email to activate your account',
			}
		},
		registration : {
			title : 'Sign Up Complete',
			desc : '',
			complete : {
				title : 'Congratulations!',
				desc : 'Sign Up Complete!',
			}
		},
		change_pwd : {
			title : 'Change password',
			desc : '',
			rules : {
				title : 'Password must be at least 8 characters long',
			},
			current : {
				title : 'Current password',
				error : 'Password is wrong'
			},
			new : {
				title : 'New password',
				error : 'Password must be at least 8 characters long',
			},
			confirm : {
				title : 'Confirm',
				error : 'Passwords do not match'
			},
		},
		pwd_reset_ : {
			title : '找回密码',
			desc : '',
			mail_sent : {
				title : '发送找回密码邮件',
			}
		},
		blog : {
			title : '博客',
			desc : ''
		},
		asset_index : {
			title : '资产',
			desc : ''
		},
		notification : {
			title : '告示',	
			desc :'',
			list : {
				title: '帖子',
				desc: ''
			}			
		},
		bookmark : {
			title : '书签',
			desc : '添加您喜欢的资产社区!',
		},
		assetqa: {
			title: 'QA',
			desc: '随时问一问!',
			questionlist : {
				title:'问题目录',
			}
		},
		qa_detail : {
			accepted : {
				title: '回答完',
			}
		},		
		profile: {
			title:'简介',
			desc:'',
			display_name: {
				title : '显示名称',
			},
			username : {
				title : '用户名',
			},
			email : {
				title : '邮件',
			},
			biography : {
				title : '序言',
			},
			language : {
				title : '语言',
			},
			portfolio : {
				title: '投资组合',
				desc: '',
			},
			follower : {
				title: '粉丝',
			},
			following : {
				title: '关注',
			},
			userfeed : {
				title: '用户名',
			},
		},
		portfolio_detail : {
			roi_chart : {
				title : 'ROI CHART'
			}
		},
		asset : {
			holders : {
				title : '加密货币持有者'
			},
			review : {
				title : '评论'
			},
			bloglist : {
				title : '博客',
				desc: '',
			},
			questionlist : {
				title : '问题',
				desc: '',
			},
			priceforecast : {
				title : '价格预测',
				desc : ''
			},
			tweets : {
				title : 'TWEET',
				desc: '',
			}
		},
		asset_detail : {
			price_chart : {
				title : '价格表',
				desc : '',
			},
			price_data : {
				title : '价格数据',
				desc : '',
			}
		},
		holderView : {
				title : ' 加密货币持有者',
			holderList : {
					title : '加密货币持有者目录',
			},
		},
		review : {			
			forecast : {
				title : '投资预测',
				desc : '',
				},
			forecastlist : {
				title : '预测项目',
				desc : ''
			},
			input : {
				title : '价格会上涨吗?'
			}
		},
		blogwriter : {
			title : '写博客',
			desc : '请分享您的知识!',
			bloglist : {
				title : '博客目录',
				desc : ''
			}
		},
		inbox : {
			title : '短信箱子',
			desc : '',
		},
		risk : {
			title : '风险',
			desc : '',
			chart : {
				risk : {
					title : 'Risk',
					desc : ''
				},
				risk_vix : {
					title : 'Risk_VIX',
					desc :''
				},
				risk_event : {
					title : 'Risk_EVENT',
					desc : ''
				}
			}
		},

		cwatch : {
			title : 'CWATCH',
			desc : '',
			subtitle : {
				title : "Let's see how accurate it is!",
				desc: '',
			},
			probability : {
				title : 'Change Probability Level',
			},
			btc : {
				title : 'CWatch BTC',
			},
			eth : {
				title : 'CWatch ETH',
			}
		},
		vcportfolio : {
			title : 'Discover Promising Asset, and Copy it',
			desc :'',
			roi : {
				title : 'VC ROI',
				desc : ''
			}
			
		},
		cryptovc : {
			title : 'Discover Promising Asset, and Start Copy Investment',
			desc : '',
			roi : {
				title : 'CRYPTO VC ROI',
				desc :'',
			},
			portfolio : {
				title : 'CRYPTO VC PORTFOLIO',
				desc: ''
			}
		},
		trend : {
			title : 'MARKET TREND',
			desc : '',
			chart : {
				index : {
					title : 'MARKET TREND INDEX',
					desc :'',
				},
				dominance : {
					title : 'Dominance',
					desc : '',
				},
				kpremium : {
					title : 'Kpremium',
					desc : '',
				},
				sector : {
					title : 'Sector',
					desc : '',
				},
				sectortv : {
					title : 'SectorTV',
					desc : '',
				}
			}
		},
		feeds : {
			title : '你的关注',
			desc : '',
			userfeed : {		
				title : '帖子',
				desc : ''
			},
			nouserfeed : {
				title : '你没有关注',
				desc : '更新关注用户',
			}
		},
		portfolio_index : {
			title : '投资组合',
			desc: ''
		}

	},


	dialog : {
		password_edit : {
			title : '忘记密码',
			desc : '请填写邮件!',
		},
		biography : {
			title : '传记',
		},
		
		reset_password : {
			title : '已成功更新的您密码.',
			password_updated : {
				title : '升级密码.', 
			},
			password_changed : {
				title: '',
			},
			password_complete : {
				title : '使用新密码登录.',
			}
		},
		add_portfolio : {
			title : '关注加密货币组合',
			desc :'请管理加密货币组合!',
			asset : {
				title : '资产',
			},
			no_results : {
				title : '没有结果',
			},
			group_name : {
				title : "投资组合名"
			},
			description : {
				title : "说明"
			},
		},
		delete : {
			title : '确定要删除吗?',
		},
		messageWriter : {
			desc : '发短信!',
			subject : '题目',
			body : '内容',
		},
		edit_dialog: {
			biography: {
				title:'Biography'
			},
			portfolio: {
				title:'新投资组合'
			}
		},
		add_bookmark : {
			title : '关注加密货币群',
		},
	
		update_portfolio : {
			title : '加密货币组合管理',
		},
	},
	
	button: {
		add : '添加',
		buy : '买',
		answer_like : '好',
		answer_dislike : '不好',
		back: "退",
		blog: '博客',
		blog_like : '好',
		bookmark:"书签",
		blog_dislike : '不好',
		bookmark : '书签',
		cancel: '取消',
		change_password:"换密码",
		close: '关',
		chartview: "CHART",
		confirm: "确认",
		change: '更新',
		collapse: 'Collapse',
		edit: '更新',
		expand: '回帖',
		following: '关注',
		follow: '关注',
		go_login: "去登录",
		go_home: "首页",
		login: '登录',
		lordmore: '更多',
		logout: '推出',
		more: '更多',
		message: '信息',
		next: "下一页",
		portfolio: '投资组合',
		portfolio_like: '极好',
		portfolio_dislike: '需要重新平衡',
		profile : '简介',
		question: '问题',
		save: '储蓄',
		reply: '留言',
		resend: "再发",
		resend_activate: "重新发送激活邮件",
		reset_password:"找回密码",
		send: "送",
		share: '分享',
		signup: '注册',
		show_table: 'PRICE INFO TABLE',
		ssend: '发送',
		swap : '交换',
		unfollow: '取关',
		update: '更新',
		userfollow: '关注',
		userfollowing: '关注',
	}
};