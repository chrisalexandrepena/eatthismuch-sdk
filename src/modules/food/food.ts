import { DetailedFoodNutritionDetails, ListResponseDto, SessionCredentials } from "../../types/index.js";
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
export async function getCustomFoodNutritionDetails(foodIds: string[], credentials: SessionCredentials): Promise<DetailedFoodNutritionDetails[]> {
    const { data } = await axios.post<DetailedFoodNutritionDetails[]>(
        "https://www.eatthismuch.com/food-browser/custom_nutrition/",
        `food_ids=${encodeURIComponent("[" + foodIds.join(",") + "]")}`,
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
