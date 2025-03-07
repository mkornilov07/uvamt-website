"use client";

export default function Register() {
    function adjustIframeHeight(event: React.SyntheticEvent<HTMLIFrameElement>) {
        const iframe = event.currentTarget;
        if (iframe.contentWindow && iframe.contentWindow.document.body) {
            iframe.style.height = `${iframe.contentWindow.document.body.scrollHeight}px`;
        }
    }

    return <div className="w-full text-center">
        <iframe className="m-auto" src="https://docs.google.com/forms/d/e/1FAIpQLSd3O9TIiDp9xYY81jq9Fh86agvUkTHri8VnhWV8TXtixMbugQ/viewform?embedded=true" width="100%" height={typeof window !== "undefined" ? (1260000 / Math.min(600, window.innerWidth)) : 2100} frameBorder={0} marginHeight={0} marginWidth={0}>Loading…</iframe>
    </div>
}