import React from "react";

function LinkList(){
    return (
        <div>
            <h2 className="my-4">Links</h2>
            {
                links && links.map(link => {
                    <LinkCard />
                })
            }
        </div>
    )
}

export default LinkList;