import type { SessionCredentials } from "../../types/index.js";
import type { Recipe } from "../../types/index.js";
import type { ListResponseDto } from "../../types/index.js";
import axios from "axios";
import { buildCookieStringFromCredentials } from "../login/login.js";

export async function listCustomRecipes(credentials: SessionCredentials): Promise<Recipe[]> {
    const { data } = await axios.get<ListResponseDto<Recipe>>("https://www.eatthismuch.com/api/v1/customrecipe/", {
        headers: {
            Cookie: buildCookieStringFromCredentials(credentials),
            Referer: "https://www.eatthismuch.com/food-browser/",
            "X-Csrftoken": credentials.csrfToken,
        },
    });
    return data.objects;
}
