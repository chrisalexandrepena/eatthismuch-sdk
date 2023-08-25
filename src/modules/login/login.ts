import axios from "axios";
import { SessionCredentials } from "../../types/index.js";

async function getCsrfToken(): Promise<{ cookie?: string; token?: string }> {
    const { headers } = await axios.get("https://www.eatthismuch.com/user/login/");
    const csrfCookie = headers["set-cookie"]?.find(cookie => /^csrftoken/gi.test(cookie));
    const csrfToken = csrfCookie ? (/csrftoken=([^;]+);/gi.exec(csrfCookie) ?? [])[1] : undefined;
    return { cookie: csrfCookie, token: csrfToken };
}

export function buildCookieStringFromCredentials({ csrfToken, sessionId }: SessionCredentials): string {
    return `csrftoken=${csrfToken}; sessionid=${sessionId}`;
}

export async function getSessionCredentials(username, password): Promise<{ csrfToken: string; sessionId: string }> {
    const { token: csrfToken } = await getCsrfToken();
    if (!csrfToken) throw new Error("No CSRF token found");
    const params = new URLSearchParams();
    params.append("csrfmiddlewaretoken", csrfToken);
    params.append("username", username);
    params.append("password", password);
    const { headers } = await axios.post<void>("https://www.eatthismuch.com/user/login/", params, {
        headers: {
            Cookie: `csrftoken=${csrfToken}`,
            Origin: "https://www.eatthismuch.com",
            Referer: "https://www.eatthismuch.com/user/login/",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        maxRedirects: 0,
        validateStatus: status => status < 300 || status === 302,
    });
    const sessionIdCookie = headers["set-cookie"]?.find(cookie => /^sessionid/gi.test(cookie));
    const sessionId = sessionIdCookie ? (/sessionid=([^;]+);/gi.exec(sessionIdCookie) ?? [])[1] : undefined;
    if (!sessionId) throw new Error("Wrong credentials");
    return { csrfToken, sessionId };
}
