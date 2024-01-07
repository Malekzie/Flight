import type { Actions } from "./$types";
import { redirect, fail } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";
import type { PageServerLoad } from "./$types";

// export const load: PageServerLoad = async ({ locals }) => {
//     const session = await locals.auth.validate();
//     return {
//         userId: session.userId,
//         username: session.username,
//     }
// };

// export const actions: Actions = {
// 	logout: async ({ locals }) => {
// 		const session = await locals.auth.validate();
// 		if (!session) return fail(401);
// 		await auth.invalidateSession(session.sessionId); // invalidate session
// 		locals.auth.setSession(null); // remove cookie
// 		throw redirect(302, "/member/login"); // redirect to login page
// 	}
// };