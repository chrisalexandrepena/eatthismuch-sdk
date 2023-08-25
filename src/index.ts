import { DetailedFoodNutritionDetails, Food, NutritionDetails, Recipe, SessionCredentials } from "./types/index.js";
import { listCustomFood, getSessionCredentials, getCustomFoodNutritionDetails } from "./modules/index.js";
import { listCustomRecipes } from "./modules/index.js";

export * from "./types/index.js";

export class EatThisMuch {
    private static _sessionCredentials: SessionCredentials;
    static async login(username: string, password: string): Promise<void> {
        EatThisMuch._sessionCredentials = await getSessionCredentials(username, password);
    }

    static listCustomRecipes(): Promise<Recipe[]> {
        if (!EatThisMuch.isLoggedIn()) throw new Error("Please login first");
        return listCustomRecipes(EatThisMuch._sessionCredentials);
    }

    static listCustomFoods(): Promise<Food[]> {
        if (!EatThisMuch.isLoggedIn()) throw new Error("Please login first");
        return listCustomFood(EatThisMuch._sessionCredentials);
    }
    static getFoodNutritionDetails(foodIds: string[]): Promise<DetailedFoodNutritionDetails[]> {
        if (!EatThisMuch.isLoggedIn()) throw new Error("Please login first");
        return getCustomFoodNutritionDetails(foodIds, EatThisMuch._sessionCredentials);
    }

    static isLoggedIn(): boolean {
        return EatThisMuch._sessionCredentials?.sessionId !== undefined && EatThisMuch._sessionCredentials?.csrfToken !== undefined;
    }

    private constructor() {}
}
