require('dotenv').config();
const { UPDATE_LINK } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse")

exports.handler = async (event) => {

    if(event.httpMethod !== 'PUT'){
        return formattedResponse(405, {err : 'Method not Supported.'});
    }
    
    const { _id : id, name, url, description, archived} = JSON.parse(event.body);
    const variables = { id, name, url, description, archived};
   // console.log("variables here =>", variables);
    try {
        const {updateLink: updatedLink} = await sendQuery(UPDATE_LINK, variables);
        //const data = res.allLinks.data;

        return formattedResponse(200, updatedLink);
            
    }catch(err){
        console.error(err);
        return formattedResponse(500, "Something went wrong");
    }
}