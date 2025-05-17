import Link from "next/link";

export default function NotificationsFallback() {
    return (
    <>
        <div>No notifications selected</div>
        <Link href={`/complex-dashboard/archive`}>Archive</Link>
    </>);
  }
  