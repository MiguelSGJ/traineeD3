import { mailTrapClient, sender } from "./mailTrapConfig.js"
import { VERIFICATION_EMAIL_TEMPLATE, WELCOME_TEMPLATE } from "./emailTemplate.js"

export const sendVerificationEmail = async (email, verificationToken) => {
	const recipient = [{ email }];

	try {
		const response = await mailTrapClient.send({
			from: sender,
			to: recipient,
			subject: "Verifique seu email",
			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
			category: "Email Verification",
		});

		console.log("Email sent successfully", response);
	} catch (error) {
		console.error(`Error sending verification`, error);

		throw new Error(`Error sending verification email: ${error}`);
	}
};

export const sendWelcomeEmail = async (email, username) => {
	const recipient = [{ email }];

	try {
		const response = await mailTrapClient.send({
			from: sender,
			to: recipient,
			subject: "Seja Bem-Vindo!",
			html: WELCOME_TEMPLATE.replace("{username}", username),
			category: "Seja Bem-Vindo!",
		});

		console.log("Email sent successfully", response);
	} catch (error) {
		console.error(`Error sending welcome`, error);
		throw new Error(`Error sending welcome email: ${error}`);
	}
};
