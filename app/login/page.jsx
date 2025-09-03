"use client";
import Footer from "../footer/footer";
import HeaderOne from "../header/HeaderOne";
import BreadCrumb from "../breadcrumb/breadcrumb";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LoginPage() {
    const { data: session } = useSession();
    console.log(session);
    if (session) {   
        if (session.user.role === "admin") {
        redirect("/admin");
        } else if (session.user.role === "user") {
        redirect("/profile");
        }
    }
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    setLoading(false);
    if (res?.ok) {
      setLoading(false);
      router.push("/");

    } else {
      setError("Invalid credentials. Please try again.");
    }
  }

  return (
    <>
        <HeaderOne />
        <BreadCrumb title="Login" innerTitle="Login" bgImage="/img/banner/Entrance12.png"/>
        <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-md-5 col-lg-4">
            <div className="bg-white p-4 rounded shadow-sm border-top border-4 border-primary">
                <h2 className="text-center mb-4">Login</h2>

                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                    Username
                    </label>
                    <input
                    id="username"
                    type="text"
                    required
                    disabled={loading}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    placeholder="Enter username"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                    Password
                    </label>
                    <input
                    id="password"
                    type="password"
                    required
                    disabled={loading}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Enter password"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-100"
                >
                    {loading ? (
                    <>
                        <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                        ></span>
                        Signing in…
                    </>
                    ) : (
                    "Sign In"
                    )}
                </button>
                </form>
            </div>
            </div>
        </div>
        </div>
        <Footer />
    </>
  );
}
