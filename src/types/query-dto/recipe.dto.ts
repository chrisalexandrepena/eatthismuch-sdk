import { NutritionDetails } from "./nutrition.dto.js";

export interface Recipe {
    accurate_grams?: boolean | null;
    allow_public?: boolean | null;
    average_frequency?: number | null;
    blatantly_unhealthy?: boolean | null;
    breakfast?: boolean | null;
    calories?: number | null;
    can_be_bulk?: boolean | null;
    carbs?: number | null;
    category_id?: number | null;
    cholesterol?: number | null;
    complexity?: number | null;
    cook_time?: number | null;
    curated?: boolean | null;
    date_created?: string | null;
    date_last_updated?: string | null;
    default_frequency?: number | null;
    default_image?: {
        image: string;
        thumbnail: string;
    } | null;
    default_package_amount?: unknown | null;
    default_package_units?: number | null;
    default_units?: number | null;
    deleted?: boolean | null;
    description?: string | null;
    discrete_units?: number | null;
    expiration_time?: number | null;
    extra_info_id?: number | null;
    extra_tags?: unknown | null;
    fats?: number | null;
    fiber?: number | null;
    food_group?: unknown | null;
    food_group_id?: unknown | null;
    food_name?: string | null;
    food_rating?: unknown | null;
    fruit_servings?: number | null;
    icon_thumbnail?: string | null;
    icon_thumbnail_svg?: string | null;
    id?: number | null;
    images?: RecipeImage[] | null;
    info_id?: number | null;
    is_basic_food?: boolean | null;
    is_breakfast?: boolean | null;
    is_dessert?: boolean | null;
    is_dinner?: boolean | null;
    is_discrete?: boolean | null;
    is_lunch?: boolean | null;
    is_recipe?: boolean | null;
    is_snack?: boolean | null;
    keeps_well?: boolean | null;
    main_dish?: boolean | null;
    major_ingredients?: string | null;
    manufactured_by?: unknown | null;
    mapped_meal_tags?: string | null;
    max_servings?: number | null;
    meal_tags?: number | null;
    meta_tags?: unknown | null;
    min_servings?: number | null;
    minimum_discrete_amount?: number | null;
    missing_prices?: boolean | null;
    model?: string | null;
    needs_blender?: boolean | null;
    needs_food_processor?: boolean | null;
    needs_grill?: boolean | null;
    needs_microwave?: boolean | null;
    needs_oven?: boolean | null;
    needs_slow_cooker?: boolean | null;
    needs_stove?: boolean | null;
    needs_toaster?: boolean | null;
    net_carbs?: number | null;
    num_favorites?: number | null;
    num_frequency_adjustments?: number | null;
    num_ingredient_usages?: number | null;
    num_normalized_ingredient_usages?: number | null;
    num_ratings?: number | null;
    num_reviews?: number | null;
    number_of_ingredients?: number | null;
    number_servings?: number | null;
    nutrition?: NutritionDetails | null;
    one_time_edit?: boolean | null;
    perishable?: boolean | null;
    placeholder_image?: string | null;
    prep_day_before?: boolean | null;
    prep_time?: number | null;
    price?: number | null;
    proteins?: number | null;
    resource_uri?: string | null;
    saturated_fats?: number | null;
    score?: number | null;
    serving_calories?: number | null;
    serving_carbs?: number | null;
    serving_fats?: number | null;
    serving_price?: number | null;
    serving_proteins?: number | null;
    side_dish?: boolean | null;
    single_serving?: boolean | null;
    slug?: string | null;
    sodium?: number | null;
    source?: string | null;
    substitution_tags?: unknown | null;
    sugar?: number | null;
    tag_cloud?: string | null;
    total_ingredient_usages?: number | null;
    total_time?: number | null;
    trans_fats?: number | null;
    uploader?: string | null;
    user_id?: number | null;
    veggie_servings?: number | null;
    wait_time?: number | null;
    weights?: Weight[] | null;
}

export interface Weight {
    amount: number;
    description: string;
    grams: number;
}

export interface RecipeImage {
    curated: boolean;
    food_id: number;
    id: number;
    image: string;
    is_primary_image: boolean;
    source: string;
    thumbnail: string;
    uploader: string;
}

export interface RecipeIngredient {
    recipe: number;
    units: number;
    food_name: string;
    description: string;
    amount: number;
    unit_description: string;
    unit_amount: number;
    gram_amount: number;
    accurate_grams: boolean;
}
