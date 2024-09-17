import Link from "next/link";
import { UserIdCard } from "@/components";

export default function ForgotPasswordThanks(): JSX.Element {
	return (
		<UserIdCard
			title="Password reset requested"
			description="Check your email for a reset password link"
		>
			<div className="mt-4 text-sm">
				Back to the{" "}
				<Link href="/" className="underline">
					homepage
				</Link>
			</div>
		</UserIdCard>
	);
}
