import React from "react";
import { auth } from "@/auth";

export default  async function page() {   
    const session = await auth();
    console.log("this is session in product page :", session);
    return <div>This is page</div>;
}