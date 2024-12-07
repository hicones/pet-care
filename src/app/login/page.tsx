"use client";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Login</h1>
          <form className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Insira seu email" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Insira sua senha"
              />
            </div>
            <Button className="w-full" size="lg">
              Log In
            </Button>
          </form>
          <p className="mt-4 text-center">
            Não possui uma conta?{" "}
            <Link href="/cadastro" className="text-primary hover:underline">
              Registrar-se
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
