import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from "./$types";
import { Prisma } from '@prisma/client';

// Checks whether user is logged in
export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, "/member/login");
	return {};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		// Destructuring username and password from form data to only get those
		const { username, password} = Object.fromEntries(
			await request.formData(),
		) as Record<string, string>;
		// basic check
		if (typeof username !== 'string' || username.length < 4 || username.length > 31) {
			return fail(400, {
				message: 'Invalid username'
			});
		}
		if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
			return fail(400, {
				message: 'Invalid password'
			});
		}
		// Creates user
		try {
			const user = await auth.createUser({
				key: {
					providerId: 'username', // auth method
					providerUserId: username.toLowerCase(), // unique id when using "username" auth method
					password // hashed by Lucia
				},
				attributes: {
					username
				}
			});
			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			});
			locals.auth.setSession(session); // set session cookie
            if (session) console.log("session exists");
		} catch (e) {
			// Checks for prisma error
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				if (e.code === 'P2002') {
					return fail(400, {
						message: 'Username already exists'
					});
				}
			}
			// redirect to
			// make sure you don't throw inside a try/catch block!
			throw redirect(302, '/member/login');
		}
	}
};
