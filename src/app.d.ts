// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

import type { PrismaClient } from "@prisma/client";

declare global {

	declare namespace App {
		interface Locals {
			auth: import("lucia").AuthRequest;
			validate: import("@lucia-auth/sveltekit").Validate
			validateUser: import("@lucia-auth/sveltekit").ValidateUser
			setSession: import("@lucia-auth/sveltekit").SetSession
		}
		// interface PageData {}
		// interface Error {}
		// interface Platform {}
	}
	const __prisma: PrismaClient

	namespace Lucia {
		type Auth = import("$lib/server/lucia").Auth;
		type DatabaseUserAttributes = {
			username: string;
		};
		type DatabaseSessionAttributes = {};
	}
}

export {}; 
