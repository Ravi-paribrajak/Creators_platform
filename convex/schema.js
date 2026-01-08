import {defineSchema, defineTable} from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        tokenIdentifier: v.string(), // Clerk User ID for Auth
        imageUrl: v.optional(v.string()), // Profile picture
        username: v.optional(v.string()), // Unique usernames for public profiles

        // Activity timestamps:
        createdAt: v.number(),
        lastActiveAt: v.number(),

    })
    .index("by_token", ["tokenIdentifier"])
    .index("by_email", ["email"]) // Email lookups
    .index("by_username", ["username"]) // Username lookups for public profiles

    .searchIndex("search_name", {searchField: "name"}) // User search
    .searchIndex("search_email", {searchField: "email"}) // will search user through email
});