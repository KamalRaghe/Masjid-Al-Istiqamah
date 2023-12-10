import { useRouter } from "next/router"
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useEffect } from "react";

export default function PaymentComplete({id, close}){
    const router = useRouter()
    async function Update(){
        router.reload
        const docRef = await updateDoc(doc(db, "accounts", id), {
            Game: true
        }) 
    }
    return(
        <div className="timeout center fonts">
            <button className="choice-stretch" onClick={() => {Update();close()}}>Enter</button>
        </div>
    )
}