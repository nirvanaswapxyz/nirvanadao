import NirvImg from "../assets/tokens/TIME.svg";
import BlissImg from "../assets/tokens/MEMO.png";

function toUrl(tokenPath: string): string {
    const host = window.location.origin;
    return `${host}/${tokenPath}`;
}

export function getTokenUrl(name: string) {
    if (name === "nirv") {
        return toUrl(NirvImg);
    }

    if (name === "bliss") {
        return toUrl(BlissImg);
    }

    throw Error(`Token url doesn't support: ${name}`);
}
