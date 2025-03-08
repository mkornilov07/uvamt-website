'use client'
import { redirect } from "next/navigation"
import {isMobile} from "../mobileDetector"
export default function Register() {
    if(isMobile(window)) {return redirect("https://docs.google.com/forms/d/e/1FAIpQLSd3O9TIiDp9xYY81jq9Fh86agvUkTHri8VnhWV8TXtixMbugQ/viewform")}
    return <div className = "w-full text-center">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd3O9TIiDp9xYY81jq9Fh86agvUkTHri8VnhWV8TXtixMbugQ/viewform?embedded=true" width="100%" height={2700} frameBorder={0} marginHeight={0} marginWidth={0} />
    </div>
}