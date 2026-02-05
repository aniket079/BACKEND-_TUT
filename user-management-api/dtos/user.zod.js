// Simple Definition 
// Zod is a schema validation library used to define and validate the shape of data.

// In simple words:

// You define rules once
// Zod checks data against those rules
// If data is invalid → it throws errors


// Declarative (rules are readable)

// Centralized validation

// Great error messages

// Used as DTO + Validator

import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  email: z.string()
});


// z.object() → object schema
// Keys = expected fields
// Values = validation rules


// import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.email("Invalid email format")
});

export const updateUserSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.email().optional()
});




