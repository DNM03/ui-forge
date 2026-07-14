import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return <div className="empty-page"><p className="eyebrow">404</p><h1>Reference not found</h1><p>The requested generated route is not part of this UI Forge corpus.</p><Link className="button" href="/"><ArrowLeft size={16} aria-hidden="true" />Return to overview</Link></div>;
}
