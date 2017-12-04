var path=require("path");
module.exports={
   entry:'./js/index.js',
   output:{
   	  path:path.resolve(__dirname,"dist/"),
   	  filename:'bundle.js'
   },
   module:{
   	  rules:[
   	  		{
   	  			test:/\.css$/,
        		use:["style-loader","css-loader"]
   	  		},
   	  		{
   	  			test:/\.(gif|jpg)$/,
   	  			use:"url-loader?limit=10000&name=[name].[ext]"
   	  		},
   	  		{
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                use:{
                	loader:"file-loader",
                	options:{
                		name:'font/[name].[ext]'
                	}
                } 
                
               
             
            }
   	  		
   	  ]
   	
   },
   resolve:{
   		extensions:[".js",".css"]
   }
	
	
	
	
}
