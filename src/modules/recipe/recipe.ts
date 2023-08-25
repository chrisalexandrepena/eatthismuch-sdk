import type { RecipeIngredient, SessionCredentials } from "../../types/index.js";
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

export async function listRecipeIngredients(recipeId: number, credentials: SessionCredentials): Promise<RecipeIngredient[]> {
    const { data } = await axios.post<RecipeIngredient[]>(
        "https://www.eatthismuch.com/food/fetch_ingredients/",
        `recipe_ids=${encodeURIComponent("[" + recipeId + "]")}`,
        {
            headers: {
                Cookie: buildCookieStringFromCredentials(credentials),
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                Origin: "https://www.eatthismuch.com",
                Referer: "https://www.eatthismuch.com/food-browser/",
                "X-Csrftoken": credentials.csrfToken,
            },
        },
    );
    return data;
}
