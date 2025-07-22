'use server'

import { GoogleGenAI } from "@google/genai";


import clientPromise from "../lib/mongodb";
import { redirect } from "next/navigation";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";





let dbConnect=async()=>{
    const client = await clientPromise;
    const db = client.db("gemini-DB");
    return db

}

export async function aii(){
   const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});
return ai
}




 const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function handleSubmit(formData) {
  const question = formData.get("question");
  // console.log("User Question:", question);

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: question,
          },
        ],
      },
    ],
  });

  const result = response.candidates[0]?.content?.parts[0]?.text || "No response generated.";
  // console.log("Gemini says:", result);

  try {
     let db= await dbConnect()
    const conversationCollection = db.collection("conversation"); // your collection name
    const createdAt = new Date().toLocaleString("en-US", {
     timeZone: "Asia/Dhaka",
     });
    const res = await conversationCollection.insertOne({
      question:question,
      answer:result,
      createdAt: createdAt,
    });

   



    // console.log("✅ Data inserted:", res.insertedId);
   
  } catch (err) {
    console.error("❌ MongoDB insert error:", err);
  }
   redirect("/conversation");

  return result;
}

export let getConversation = async () => {
  
  try {
     let db= await dbConnect()
    const conversationCollection = db.collection("conversation"); // your collection name

    let result = await conversationCollection.find().toArray();

    return result

    

    
  } catch (err) {
    console.error("❌ MongoDB getData error:", err);
  }
};




export let getSingleConversation = async (id) => {
  try {
    const db = await dbConnect();
    const conversationCollection = db.collection("conversation"); // ✅ এখানে declare করো

    const conversation = await conversationCollection.findOne({
      _id: new ObjectId(id),
    });

    return conversation;
  } catch (error) {
    console.error("Error fetching conversation:", error);
    return null;
  }
};

export async function deleteConversation(formData) {
  const id = formData.get("id");

  let query={_id:new ObjectId(id)}


  
   try {
    const db = await dbConnect();
    const conversationCollection = db.collection("conversation"); // ✅ এখানে declare করো

    const conversation = await conversationCollection.deleteOne(query);
    revalidatePath("/")
    

    return conversation;
  } catch (error) {
    console.error("Error fetching conversation:", error);
    return null;
  }

  // Perform DB delete logic here
}





