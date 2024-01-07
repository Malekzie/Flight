import { auth } from "$lib/server/lucia";
import { redirect } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, "/member/login");
	return {
		userId: session.user.userId,
		username: session.user.username
	};
};

export const actions: Actions = {
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.auth.setSession(null); // remove cookie
		throw redirect(302, "/member/login"); // redirect to login page
	}
};