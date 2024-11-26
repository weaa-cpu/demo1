import { User } from "./user.ts";

export interface Comment {
    user_id?: number;
    article_id?: number;
    created_at?: number;
    content?: string
    user?:User
}