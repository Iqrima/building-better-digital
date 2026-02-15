import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#f6f8fb]">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 py-32 space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-heading">Privacy Policy</h1>
                    <p className="text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
                </div>

                <div className="prose prose-slate max-w-none text-slate-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
                        <p>We collect information you provide directly to us, such as when you fill out a form, request a demo, or communicate with us. This may include your name, email address, phone number, and company details.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
                        <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and send you technical notices and support messages.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Security</h2>
                        <p>We implement reasonable security measures to protect your information from unauthorized access, loss, or misuse. However, no internet transmission is completely secure.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:buildingbetterwork@gmail.com" className="text-blue-600 hover:underline">buildingbetterwork@gmail.com</a>.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
