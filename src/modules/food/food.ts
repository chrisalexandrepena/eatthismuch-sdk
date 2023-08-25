import { ListResponseDto, SessionCredentials } from "../../types/index.js";
import { Food } from "../../types/index.js";
import axios from "axios";
import { buildCookieStringFromCredentials } from "../login/login.js";

export async function listCustomFood(credentials: SessionCredentials): Promise<Food[]> {
    const { data } = await axios.get<ListResponseDto<Food>>("https://www.eatthismuch.com/api/v1/customrecipe/", {
        headers: {
            Cookie: buildCookieStringFromCredentials(credentials),
            Referer: "https://www.eatthismuch.com/food-browser/",
            "X-Csrftoken": credentials.csrfToken,
        },
    });
    return data.objects;
}
