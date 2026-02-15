import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-[#f6f8fb]">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 py-32 space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-heading">Terms of Service</h1>
                    <p className="text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
                </div>

                <div className="prose prose-slate max-w-none text-slate-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                        <p>By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services</h2>
                        <p>We provide digital product development, design, and related services. We reserve the right to modify or discontinue any part of our services at any time.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Intellectual Property</h2>
                        <p>All content, features, and functionality on this site are the exclusive property of Building Better. Unauthorized use, reproduction, or distribution is strictly prohibited.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitation of Liability</h2>
                        <p>In no event shall Building Better be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Information</h2>
                        <p>Questions about the Terms of Service should be sent to us at <a href="mailto:buildingbetterwork@gmail.com" className="text-blue-600 hover:underline">buildingbetterwork@gmail.com</a>.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
