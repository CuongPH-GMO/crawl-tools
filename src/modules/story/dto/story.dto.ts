import { Category } from "src/modules/category/schemas/category.schema";

export class StoryDto {
    _id ?: string;
    categories ?: Array<Category>;
    name?: string;
    banner?: string;
    author?: string;
    View?: string;
    rate?: number;
    status?: number;
    description?: string;
    follower?: number;
    created_at?: string;
    updated_at?: string;
}